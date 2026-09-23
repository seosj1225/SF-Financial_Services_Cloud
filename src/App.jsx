import React, { useState, useEffect } from "react";
import { CSS } from "./theme.js";
import Quiz from "./Quiz.jsx";
import { FSC_QUESTIONS } from "./questions/fsc.js";
import { AGENTFORCE_QUESTIONS } from "./questions/agentforce.js";

const DECKS = [
  {
    id: "fsc",
    code: "Salesforce · Financial Services Cloud",
    name: "FSC Accredited Professional",
    desc: "금융 서비스 클라우드 인증 문제은행. 복수 정답 문항이 섞여 있습니다.",
    questions: FSC_QUESTIONS,
    storageKey: "fsc-ap-study-v2",
    legacyKey: "fsc-ap-study-v1",
  },
  {
    id: "agentforce",
    code: "Salesforce · Agentforce",
    name: "Agentforce Specialist",
    desc: "Agentforce 스페셜리스트 인증 문제은행. 3지선다 단일 정답 문항입니다.",
    questions: AGENTFORCE_QUESTIONS,
    storageKey: "af-spec-study-v1",
  },
];

// 마지막으로 고른 시험을 기억해 두면 새로고침해도 그 자리로 돌아온다.
const PICK_KEY = "quiz-deck-pick-v1";

export default function App() {
  const [deckId, setDeckId] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PICK_KEY);
      if (saved && DECKS.some((d) => d.id === saved)) setDeckId(saved);
    } catch (e) {}
  }, []);

  const pick = (id) => {
    setDeckId(id);
    try {
      localStorage.setItem(PICK_KEY, id);
    } catch (e) {}
  };
  const exit = () => {
    setDeckId(null);
    try {
      localStorage.removeItem(PICK_KEY);
    } catch (e) {}
  };

  const deck = DECKS.find((d) => d.id === deckId);

  if (deck)
    return (
      <Quiz
        key={deck.id}
        questions={deck.questions}
        storageKey={deck.storageKey}
        legacyKey={deck.legacyKey}
        eyebrow={deck.code}
        title={`${deck.name} 문제은행`}
        onExit={exit}
      />
    );

  return (
    <div className="fsc">
      <style>{CSS}</style>
      <div className="col">
        <div className="eyebrow">Salesforce Certification</div>
        <h1 className="title">어떤 시험을 풀까요?</h1>
        <div className="sub">
          시험마다 풀이 기록·오답 횟수·별표가 따로 저장됩니다.
        </div>

        <div className="pick">
          {DECKS.map((d) => (
            <button key={d.id} className="deck" onClick={() => pick(d.id)}>
              <div className="dcode">{d.code}</div>
              <div className="dname">{d.name}</div>
              <div className="ddesc">{d.desc}</div>
              <div className="dmeta">
                <span>
                  <b>{d.questions.length}</b>문항
                </span>
                <span>한 문제씩 풀기 · 모의고사</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
