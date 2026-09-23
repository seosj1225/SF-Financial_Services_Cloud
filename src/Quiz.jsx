import React, { useState, useEffect, useMemo, useCallback } from "react";
import { CSS } from "./theme.js";

// 호스트가 window.storage를 주지 않는 환경(일반 웹)에서는 localStorage로 대체한다.
// 없는 키는 throw 해야 아래의 legacyKey 마이그레이션 경로가 그대로 동작한다.
const store = {
  async get(k) {
    if (typeof window !== "undefined" && window.storage)
      return window.storage.get(k);
    const value = localStorage.getItem(k);
    if (value === null) throw new Error("no value for " + k);
    return { value };
  },
  set(k, v) {
    if (typeof window !== "undefined" && window.storage)
      return window.storage.set(k, v);
    localStorage.setItem(k, v);
  },
};

const shuffle = (a) => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
const eqSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
const makeById = (questions) => {
  const m = {};
  questions.forEach((q) => {
    m[q.i] = q;
  });
  return m;
};
/* 문항별 보기 순서를 무작위로 섞고 A·B·C… 라벨을 다시 매긴다.
   내부 정답/기록은 원래 letter 그대로 두어 과거 기록과 호환된다. */
const makeOrders = (questions) => {
  const o = {};
  questions.forEach((q) => {
    o[q.i] = shuffle(q.o.map((raw) => raw.slice(0, 1)));
  });
  return o;
};
/* 모의고사 분량 선택지: 전체 문항 수보다 작은 값만 남기고 마지막에 전체를 붙인다. */
const sizeChoices = (total) => [
  ...[20, 50, 100].filter((n) => n < total),
  total,
];
const optView = (q, orders) => {
  const text = {};
  q.o.forEach((raw) => {
    text[raw.slice(0, 1)] = raw.slice(3);
  });
  const ord = orders[q.i] || q.o.map((raw) => raw.slice(0, 1));
  return ord.map((orig, i) => ({
    orig,
    L: String.fromCharCode(65 + i),
    text: text[orig],
  }));
};
const dispLetters = (q, orders, letters) =>
  optView(q, orders)
    .filter((o) => letters.includes(o.orig))
    .map((o) => o.L);

const fmtTime = (s) =>
  `${Math.floor(s / 60)}분 ${String(s % 60).padStart(2, "0")}초`;
const fmtDate = (ms) => {
  const d = new Date(ms);
  return `${d.getMonth() + 1}월 ${d.getDate()}일 ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};
const cellClass = (c) => {
  if (!c) return "";
  if (c.x >= 3) return " x3";
  if (c.x === 2) return " x2";
  if (c.x === 1) return " x1";
  if (c.o) return " o";
  return "";
};

function Question({ q, opts, sel, onToggle, locked, tally }) {
  const n = q.a.length;
  return (
    <>
      <div className="qno">
        문항 {q.i}
        {tally > 0 && <span className="tally"> · 지금까지 {tally}번 틀림</span>}
      </div>
      <div className="qtext">{q.q}</div>
      <div className="hint">{n > 1 ? `${n}개 선택` : "1개 선택"}</div>
      <div className="opts">
        {opts.map(({ orig, L, text }) => {
          const picked = sel.includes(orig);
          const correct = q.a.includes(orig);
          let cls = "opt";
          if (locked) {
            if (correct) cls += " ok";
            else if (picked) cls += " no";
          } else if (picked) cls += " sel";
          return (
            <button
              key={orig}
              className={cls}
              disabled={locked}
              onClick={() => onToggle(orig)}
            >
              <span className="ltr">{L}</span>
              <span className="txt">{text}</span>
              <span className="mk">
                {locked ? (correct ? "✓" : picked ? "✕" : "") : ""}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default function Quiz({
  questions: QUESTIONS,
  storageKey: KEY,
  legacyKey: OLD_KEY,
  eyebrow,
  title,
  onExit,
}) {
  const byId = useMemo(() => makeById(QUESTIONS), [QUESTIONS]);

  const [view, setView] = useState("home");
  const [stars, setStars] = useState([]);
  const [counts, setCounts] = useState({}); // 한 문제씩 풀기 전용: id -> {o, x}
  const [exams, setExams] = useState([]); // 모의고사 기록 전용
  const [ready, setReady] = useState(false);

  // practice
  const [pool, setPool] = useState([]);
  const [idx, setIdx] = useState(0);
  const [work, setWork] = useState({});

  // exam
  const [examIds, setExamIds] = useState([]);
  const [examAns, setExamAns] = useState({});
  const [eIdx, setEIdx] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [wrongOnly, setWrongOnly] = useState(true);
  const [examSize, setExamSize] = useState(QUESTIONS.length);
  const [showNav, setShowNav] = useState(false);
  const [dialog, setDialog] = useState(null);
  const [orders, setOrders] = useState(() => makeOrders(QUESTIONS));

  /* ---------- storage --------- */
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await store.get(KEY);
        const d = JSON.parse(r.value);
        if (alive && d) {
          setStars(d.stars || []);
          setCounts(d.counts || {});
          setExams(d.exams || []);
        }
      } catch (e) {
        try {
          // 예전 저장 키에서 옮겨오기
          if (!OLD_KEY) throw e;
          const r = await store.get(OLD_KEY);
          const d = JSON.parse(r.value);
          if (alive && d) {
            const c = {};
            Object.entries(d.results || {}).forEach(([k, v]) => {
              c[k] = { o: v === "o" ? 1 : 0, x: v === "x" ? 1 : 0 };
            });
            setStars(d.stars || []);
            setCounts(c);
          }
        } catch (e2) {
          /* 첫 실행 */
        }
      }
      if (alive) setReady(true);
    })();
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      store.set(KEY, JSON.stringify({ stars, counts, exams }));
    } catch (e) {}
  }, [ready, stars, counts, exams]);

  const toggleStar = useCallback((id) => {
    setStars((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }, []);

  const bump = useCallback((id, ok) => {
    setCounts((p) => {
      const c = p[id] || { o: 0, x: 0 };
      return { ...p, [id]: ok ? { ...c, o: c.o + 1 } : { ...c, x: c.x + 1 } };
    });
  }, []);

  /* ---------- session start ---------- */
  const startPractice = (ids, at = 0) => {
    setOrders(makeOrders(QUESTIONS));
    setPool(ids);
    setIdx(at);
    setWork({});
    setView("practice");
  };
  const startExam = (n) => {
    setOrders(makeOrders(QUESTIONS));
    setExamIds(shuffle(QUESTIONS.map((q) => q.i)).slice(0, n));
    setExamAns({});
    setEIdx(0);
    setShowNav(false);
    setStartedAt(Date.now());
    setElapsed(0);
    setView("exam");
  };

  useEffect(() => {
    if (view !== "exam") return;
    const t = setInterval(
      () => setElapsed(Math.floor((Date.now() - startedAt) / 1000)),
      1000,
    );
    return () => clearInterval(t);
  }, [view, startedAt]);

  /* ---------- derived ---------- */
  const stat = useMemo(() => {
    let attempted = 0,
      wrongQ = 0,
      wrongTotal = 0,
      clean = 0;
    Object.values(counts).forEach((c) => {
      if (c.o + c.x > 0) attempted++;
      if (c.x > 0) {
        wrongQ++;
        wrongTotal += c.x;
      } else if (c.o > 0) clean++;
    });
    return { attempted, wrongQ, wrongTotal, clean };
  }, [counts]);

  const wrongRanked = useMemo(
    () =>
      Object.keys(counts)
        .map(Number)
        .filter((id) => counts[id].x > 0)
        .sort((a, b) => counts[b].x - counts[a].x || a - b),
    [counts],
  );

  /* ---------- practice ---------- */
  const curId = pool[idx];
  const curQ = byId[curId];
  const cur = work[curId] || { sel: [], locked: false };

  const pToggle = (L) => {
    if (cur.locked) return;
    const sel =
      curQ.a.length === 1
        ? cur.sel.includes(L)
          ? []
          : [L]
        : cur.sel.includes(L)
          ? cur.sel.filter((x) => x !== L)
          : [...cur.sel, L];
    setWork((w) => ({ ...w, [curId]: { sel, locked: false } }));
  };
  const pCheck = () => {
    if (!cur.sel.length || cur.locked) return;
    setWork((w) => ({ ...w, [curId]: { sel: cur.sel, locked: true } }));
    bump(curId, eqSet(cur.sel, curQ.a));
  };
  const pMove = (d) => {
    const n = idx + d;
    if (n >= 0 && n < pool.length) setIdx(n);
  };

  /* ---------- exam ---------- */
  const exId = examIds[eIdx];
  const exQ = byId[exId];
  const exSel = examAns[exId] || [];
  const eToggle = (L) => {
    const sel =
      exQ.a.length === 1
        ? exSel.includes(L)
          ? []
          : [L]
        : exSel.includes(L)
          ? exSel.filter((x) => x !== L)
          : [...exSel, L];
    setExamAns((a) => ({ ...a, [exId]: sel }));
  };
  const gradeExam = () => {
    const secs = Math.floor((Date.now() - startedAt) / 1000);
    const score = examIds.filter((id) =>
      eqSet(examAns[id] || [], byId[id].a),
    ).length;
    setExams((p) =>
      [{ at: Date.now(), ids: examIds, ans: examAns, secs, score }, ...p].slice(
        0,
        30,
      ),
    );
    setElapsed(secs);
    setWrongOnly(true);
    setView("result");
  };
  const submitExam = () => {
    const blank = examIds.filter((id) => !(examAns[id] || []).length).length;
    if (!blank) {
      gradeExam();
      return;
    }
    setDialog({
      msg: `아직 안 푼 문제가 ${blank}개 있습니다. 지금 제출하면 그 문제는 오답 처리됩니다.`,
      yes: "제출하기",
      onYes: gradeExam,
    });
  };
  const openRecord = (r) => {
    setExamIds(r.ids);
    setExamAns(r.ans);
    setElapsed(r.secs);
    setWrongOnly(true);
    setView("result");
  };
  const examScore = useMemo(
    () => examIds.filter((id) => eqSet(examAns[id] || [], byId[id].a)).length,
    [examIds, examAns],
  );

  /* ---------- keyboard ---------- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (dialog) {
        if (k === "Escape") {
          e.preventDefault();
          setDialog(null);
        }
        if (k === "Enter") {
          e.preventDefault();
          const d = dialog;
          setDialog(null);
          d.onYes();
        }
        return;
      }
      const q = view === "practice" ? curQ : view === "exam" ? exQ : null;
      if (!q) return;
      const opts = optView(q, orders);
      const li = /^[a-fA-F]$/.test(k)
        ? opts.findIndex((o) => o.L === k.toUpperCase())
        : /^[1-6]$/.test(k)
          ? Number(k) - 1
          : -1;
      if (li >= 0 && opts[li]) {
        e.preventDefault();
        (view === "practice" ? pToggle : eToggle)(opts[li].orig);
        return;
      }
      if (k === "s" || k === "S") {
        e.preventDefault();
        toggleStar(view === "practice" ? curId : exId);
        return;
      }
      if (view === "practice") {
        if (k === "Enter") {
          e.preventDefault();
          cur.locked ? pMove(1) : pCheck();
        }
        if (k === "ArrowRight") {
          e.preventDefault();
          pMove(1);
        }
        if (k === "ArrowLeft") {
          e.preventDefault();
          pMove(-1);
        }
      } else {
        if (k === "Enter" || k === "ArrowRight") {
          e.preventDefault();
          setEIdx((i) => Math.min(i + 1, examIds.length - 1));
        }
        if (k === "ArrowLeft") {
          e.preventDefault();
          setEIdx((i) => Math.max(i - 1, 0));
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  /* ---------- small components ---------- */
  const StarBtn = ({ id }) => (
    <button
      className="iconbtn"
      onClick={() => toggleStar(id)}
      aria-label={stars.includes(id) ? "별표 해제" : "별표 표시"}
    >
      <span className={"star" + (stars.includes(id) ? " on" : "")}>
        {stars.includes(id) ? "★" : "☆"}
      </span>
    </button>
  );

  const Board = ({ ids, onPick, state, label, now }) => (
    <div className="board">
      {ids.map((id, i) => {
        const cls = state ? state(id, i) : cellClass(counts[id]);
        return (
          <button
            key={id}
            className={
              "cell" +
              cls +
              (stars.includes(id) ? " st" : "") +
              (now === i ? " now" : "")
            }
            onClick={() => onPick(id, i)}
            title={
              counts[id]
                ? `문항 ${id} · 맞힘 ${counts[id].o} / 틀림 ${counts[id].x}`
                : `문항 ${id}`
            }
          >
            {label ? label(id, i) : id}
          </button>
        );
      })}
    </div>
  );

  /* ---------- views ---------- */
  if (!ready)
    return (
      <div className="fsc">
        <style>{CSS}</style>
        <div className="col" />
      </div>
    );

  let body;

  if (view === "home") {
    body = (
      <div className="col">
        <button className="linkish backlink" onClick={onExit}>
          ← 시험 선택
        </button>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="title">{title}</h1>
        <div className="sub">
          {QUESTIONS.length}문항 · 번호를 누르면 그 문제부터 바로 풀 수
          있습니다.
        </div>

        <Board
          ids={QUESTIONS.map((q) => q.i)}
          onPick={(id) =>
            startPractice(
              QUESTIONS.map((q) => q.i),
              QUESTIONS.findIndex((q) => q.i === id),
            )
          }
        />

        <div className="legend">
          <span>
            푼 문제 <b>{stat.attempted}</b>
          </span>
          <span>
            한 번도 안 틀린 문제 <b>{stat.clean}</b>
          </span>
          <span>
            틀린 적 있는 문제 <b>{stat.wrongQ}</b>
          </span>
          <span>
            총 오답 <b>{stat.wrongTotal}</b>회
          </span>
          <span>
            별표 <b>{stars.length}</b>
          </span>
        </div>
        <div
          className="sub"
          style={{ marginTop: 10, marginBottom: 0, fontSize: 12.5 }}
        >
          위 숫자와 색은 한 문제씩 풀기 기록입니다. 색이 진할수록 많이 틀린
          문제예요. 모의고사는 여기에 반영되지 않습니다.
        </div>

        <div className="resets">
          <button
            className="linkish"
            disabled={!stat.attempted}
            onClick={() =>
              setDialog({
                msg: "한 문제씩 풀기의 맞힘·오답 횟수를 모두 0으로 되돌립니다. 별표와 모의고사 기록은 그대로 둡니다.",
                yes: "횟수 초기화",
                danger: true,
                onYes: () => setCounts({}),
              })
            }
          >
            오답 횟수 초기화
          </button>
          <button
            className="linkish"
            disabled={!exams.length}
            onClick={() =>
              setDialog({
                msg: `모의고사 기록 ${exams.length}회를 모두 지웁니다.`,
                yes: "기록 삭제",
                danger: true,
                onYes: () => setExams([]),
              })
            }
          >
            모의고사 기록 삭제
          </button>
          <button
            className="linkish"
            disabled={!stars.length}
            onClick={() =>
              setDialog({
                msg: `별표 ${stars.length}개를 모두 해제합니다.`,
                yes: "전체 해제",
                danger: true,
                onYes: () => setStars([]),
              })
            }
          >
            별표 전체 해제
          </button>
        </div>

        <h2 className="sec">한 문제씩 풀기</h2>
        <div className="secsub">
          답을 고르면 바로 채점하고, 문항마다 틀린 횟수를 쌓아 둡니다.
        </div>
        <button
          className="mode"
          onClick={() =>
            startPractice(
              QUESTIONS.map((q) => q.i),
              0,
            )
          }
        >
          <span className="mname">처음부터</span>
          <span className="mdesc">1번부터 순서대로 풉니다.</span>
          <span className="mmeta">{QUESTIONS.length}문항</span>
        </button>
        <button
          className="mode"
          disabled={!wrongRanked.length}
          onClick={() => startPractice(wrongRanked, 0)}
        >
          <span className="mname">많이 틀린 순</span>
          <span className="mdesc">
            {wrongRanked.length
              ? `가장 많이 틀린 문항(${wrongRanked[0]}번, ${counts[wrongRanked[0]].x}회)부터 순서대로 풉니다.`
              : "틀린 문제가 쌓이면 여기에 모입니다."}
          </span>
          <span className="mmeta">{wrongRanked.length}문항</span>
        </button>
        <button
          className="mode"
          disabled={!stars.length}
          onClick={() => startPractice(shuffle(stars), 0)}
        >
          <span className="mname">별표 문제만</span>
          <span className="mdesc">
            {stars.length
              ? "표시해 둔 문제를 랜덤 순서로 다시 풉니다."
              : "문제를 풀면서 ☆를 누르면 여기에 모입니다."}
          </span>
          <span className="mmeta">{stars.length}문항</span>
        </button>

        <h2 className="sec">모의고사</h2>
        <div className="secsub">
          랜덤 순서로 몰아 풀고, 제출한 뒤에 한 번에 채점합니다. 회차별로 기록이
          남습니다.
        </div>
        <button className="mode" onClick={() => startExam(examSize)}>
          <span className="mname">새 시험 시작</span>
          <span className="mdesc">
            시간을 재고, 제출 전까지 답을 자유롭게 바꿀 수 있습니다.
          </span>
          <span className="mmeta">{examSize}문항</span>
        </button>
        <div className="counts">
          {sizeChoices(QUESTIONS.length).map((n) => (
            <button
              key={n}
              className={"chip" + (examSize === n ? " on" : "")}
              onClick={() => setExamSize(n)}
            >
              {n === QUESTIONS.length ? "전체" : n + "문항"}
            </button>
          ))}
        </div>

        {exams.length > 0 && (
          <div style={{ marginTop: 30 }}>
            {exams.map((r) => (
              <button className="hist" key={r.at} onClick={() => openRecord(r)}>
                <span className="hd">{fmtDate(r.at)}</span>
                <span className="hs">
                  {r.score} / {r.ids.length}
                </span>
                <span className="hp">
                  정답률 {Math.round((r.score / r.ids.length) * 100)}% ·{" "}
                  {fmtTime(r.secs)}
                </span>
                <span className="hgo">다시 보기</span>
              </button>
            ))}
            <div className="histfoot">
              평균 정답률{" "}
              {Math.round(
                (exams.reduce((s, r) => s + r.score / r.ids.length, 0) /
                  exams.length) *
                  100,
              )}
              % · 최근 {exams.length}회 (최대 30회까지 보관)
            </div>
          </div>
        )}
      </div>
    );
  }

  if (view === "practice") {
    const solved = pool.filter((id) => work[id] && work[id].locked).length;
    const ok = curQ && cur.locked && eqSet(cur.sel, curQ.a);
    const c = counts[curId] || { o: 0, x: 0 };
    body = (
      <>
        <div className="top">
          <div className="topin">
            <button className="iconbtn" onClick={() => setView("home")}>
              ← 목록
            </button>
            <span className="pos">
              {idx + 1} / {pool.length}
            </span>
            <span className="bar">
              <i style={{ width: `${(solved / pool.length) * 100}%` }} />
            </span>
            <StarBtn id={curId} />
          </div>
        </div>
        <div className="col narrow">
          {!curQ ? (
            <div className="empty">문제가 없습니다.</div>
          ) : (
            <>
              <Question
                q={curQ}
                opts={optView(curQ, orders)}
                sel={cur.sel}
                onToggle={pToggle}
                locked={cur.locked}
                tally={cur.locked ? 0 : c.x}
              />
              {cur.locked && (
                <div className={"verdict " + (ok ? "ok" : "no")}>
                  <span>
                    {ok ? "정답입니다" : "오답입니다"}
                    {c.x > 0 && ` · 이 문제 누적 ${c.x}번 틀림`}
                  </span>
                  <span>
                    정답 <b>{dispLetters(curQ, orders, curQ.a).join(" ")}</b>
                  </span>
                </div>
              )}
              <div className="actions">
                {!cur.locked ? (
                  <button
                    className="btn"
                    onClick={pCheck}
                    disabled={!cur.sel.length}
                  >
                    정답 확인
                  </button>
                ) : idx < pool.length - 1 ? (
                  <button className="btn" onClick={() => pMove(1)}>
                    다음 문제
                  </button>
                ) : (
                  <button className="btn" onClick={() => setView("home")}>
                    다 풀었습니다
                  </button>
                )}
                <button
                  className="btn ghost"
                  onClick={() => pMove(-1)}
                  disabled={idx === 0}
                >
                  이전
                </button>
                {cur.locked && idx < pool.length - 1 && (
                  <button className="btn ghost" onClick={() => pMove(1)}>
                    건너뛰기
                  </button>
                )}
              </div>
              <div className="keys">
                <kbd>A</kbd>–<kbd>F</kbd> 선택 · <kbd>Enter</kbd> 확인·다음 ·{" "}
                <kbd>←</kbd>
                <kbd>→</kbd> 이동 · <kbd>S</kbd> 별표
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  if (view === "exam") {
    const answered = examIds.filter((id) => (examAns[id] || []).length).length;
    body = (
      <>
        <div className="top">
          <div className="topin">
            <button
              className="iconbtn"
              onClick={() =>
                setDialog({
                  msg: "시험을 그만두면 지금까지 고른 답안은 저장되지 않습니다.",
                  yes: "그만두기",
                  danger: true,
                  onYes: () => setView("home"),
                })
              }
            >
              ← 나가기
            </button>
            <span className="pos">
              {eIdx + 1} / {examIds.length}
            </span>
            <span className="bar">
              <i style={{ width: `${(answered / examIds.length) * 100}%` }} />
            </span>
            <span className="pos">{fmtTime(elapsed)}</span>
            <StarBtn id={exId} />
          </div>
        </div>
        <div className="col narrow">
          <Question
            q={exQ}
            opts={optView(exQ, orders)}
            sel={exSel}
            onToggle={eToggle}
            locked={false}
            tally={0}
          />
          <div className="actions">
            <button
              className="btn ghost"
              onClick={() => setEIdx((i) => Math.max(0, i - 1))}
              disabled={eIdx === 0}
            >
              이전
            </button>
            {eIdx < examIds.length - 1 ? (
              <button className="btn" onClick={() => setEIdx((i) => i + 1)}>
                다음
              </button>
            ) : (
              <button className="btn" onClick={submitExam}>
                제출하고 채점
              </button>
            )}
            <button className="btn ghost" onClick={() => setShowNav((v) => !v)}>
              {showNav ? "번호판 닫기" : "번호판"}
            </button>
            {eIdx < examIds.length - 1 && (
              <button
                className="linkish"
                style={{ marginLeft: "auto" }}
                onClick={submitExam}
              >
                지금 제출
              </button>
            )}
          </div>
          {showNav && (
            <div style={{ marginTop: 22 }}>
              <Board
                ids={examIds}
                now={eIdx}
                label={(id, i) => i + 1}
                state={(id) => ((examAns[id] || []).length ? " fill" : "")}
                onPick={(id, i) => {
                  setEIdx(i);
                  setShowNav(false);
                }}
              />
              <div
                className="legend"
                style={{ borderBottom: "none", paddingBottom: 0 }}
              >
                <span>
                  푼 문제 <b>{answered}</b> · 남은 문제{" "}
                  <b>{examIds.length - answered}</b>
                </span>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  if (view === "result") {
    const pct = Math.round((examScore / examIds.length) * 100);
    const wrongIds = examIds.filter(
      (id) => !eqSet(examAns[id] || [], byId[id].a),
    );
    const list = wrongOnly ? wrongIds : examIds;
    body = (
      <div className="col">
        <div className="eyebrow">모의고사 결과</div>
        <div className="score">
          {examScore} / {examIds.length}
        </div>
        <div className="scoresub">
          정답률 {pct}% · 걸린 시간 {fmtTime(elapsed)} · 이 회차는 기록에
          저장됩니다
        </div>
        <div className="actions" style={{ marginTop: 26 }}>
          <button className="btn ghost" onClick={() => setView("home")}>
            목록으로
          </button>
          {wrongIds.length > 0 && (
            <button className="btn" onClick={() => startPractice(wrongIds, 0)}>
              틀린 {wrongIds.length}문제 한 문제씩 풀기
            </button>
          )}
          {wrongIds.length > 0 && (
            <button
              className="linkish"
              onClick={() => setStars((p) => [...new Set([...p, ...wrongIds])])}
            >
              틀린 문제 전부 별표
            </button>
          )}
        </div>

        <div className="revhead">
          <strong style={{ fontSize: 15 }}>문제 다시 보기</strong>
          <span>
            <button
              className={"chip" + (wrongOnly ? " on" : "")}
              onClick={() => setWrongOnly(true)}
            >
              틀린 것만 {wrongIds.length}
            </button>{" "}
            <button
              className={"chip" + (!wrongOnly ? " on" : "")}
              onClick={() => setWrongOnly(false)}
            >
              전체 {examIds.length}
            </button>
          </span>
        </div>

        {list.length === 0 && (
          <div className="empty">틀린 문제가 없습니다. 전부 맞혔습니다.</div>
        )}
        {list.map((id) => {
          const q = byId[id];
          const mine = examAns[id] || [];
          const ok = eqSet(mine, q.a);
          return (
            <div className="rev" key={id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  <span className={"pill " + (ok ? "ok" : "no")}>
                    {ok ? "정답" : "오답"}
                  </span>
                  <span
                    className="qno"
                    style={{ margin: 0, display: "inline" }}
                  >
                    문항 {id}
                  </span>
                </span>
                <StarBtn id={id} />
              </div>
              <div className="rq">{q.q}</div>
              {optView(q, orders).map(({ orig, L, text }) => {
                const isA = q.a.includes(orig),
                  isM = mine.includes(orig);
                if (!isA && !isM) return null;
                return (
                  <div key={orig} className="ansline">
                    <em
                      style={{ color: isA ? "var(--right)" : "var(--wrong)" }}
                    >
                      {isA ? "✓" : "✕"} {L}.
                    </em>{" "}
                    {text}
                  </div>
                );
              })}
              <div className="ansline" style={{ marginTop: 8 }}>
                내 답{" "}
                <em>
                  {mine.length
                    ? dispLetters(q, orders, mine).join(" ")
                    : "없음"}
                </em>{" "}
                · 정답 <em>{dispLetters(q, orders, q.a).join(" ")}</em>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="fsc">
      <style>{CSS}</style>
      {body}
      {dialog && (
        <div
          className="ovl"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDialog(null);
          }}
        >
          <div className="dlg" role="dialog" aria-modal="true">
            <p>{dialog.msg}</p>
            <div className="row">
              <button className="btn ghost" onClick={() => setDialog(null)}>
                취소
              </button>
              <button
                className={"btn" + (dialog.danger ? " danger" : "")}
                autoFocus
                onClick={() => {
                  const d = dialog;
                  setDialog(null);
                  d.onYes();
                }}
              >
                {dialog.yes}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
