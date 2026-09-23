export const CSS = `
.fsc {
  --bg:#E7EBE5; --paper:#FBFCF9; --ink:#15201A; --soft:#5C6B62;
  --rule:#C6CFC2; --deep:#0E4B37; --gold:#B0821A;
  --right:#1B6B48; --rightbg:#E2EDE5; --wrong:#9E3B2A; --wrongbg:#F2E3DF;
  --sans:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','Pretendard','Apple SD Gothic Neo','Malgun Gothic',sans-serif;
  --serif:'Iowan Old Style','Palatino Linotype',Palatino,'Source Serif 4',Georgia,serif;
  background:var(--bg); color:var(--ink); font-family:var(--sans);
  min-height:100vh; font-size:15px; line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
.fsc *{box-sizing:border-box;}
.col{max-width:760px;margin:0 auto;padding:36px 22px 96px;}
.col.narrow{max-width:700px;}

.eyebrow{font-size:12.5px;color:var(--soft);letter-spacing:.01em;}
h1.title{font-family:var(--serif);font-size:34px;line-height:1.15;font-weight:600;margin:6px 0 8px;letter-spacing:-.01em;}
.sub{color:var(--soft);font-size:13.5px;margin-bottom:26px;}
h2.sec{font-family:var(--serif);font-size:20px;font-weight:600;margin:42px 0 2px;}
.secsub{color:var(--soft);font-size:13px;margin-bottom:14px;}

.backlink{display:inline-block;margin-bottom:18px;}

/* 시험 선택 화면 */
.pick{display:flex;flex-direction:column;gap:14px;margin-top:34px;}
.deck{width:100%;text-align:left;background:var(--paper);border:1px solid var(--rule);
  border-radius:6px;padding:26px 26px 24px;cursor:pointer;font:inherit;color:inherit;
  transition:border-color .12s ease,transform .08s ease,box-shadow .12s ease;}
.deck:hover{border-color:var(--deep);box-shadow:0 6px 18px rgba(21,32,26,.07);}
.deck:active{transform:translateY(1px);}
.deck .dcode{font-size:12.5px;color:var(--soft);letter-spacing:.06em;text-transform:uppercase;}
.deck .dname{font-family:var(--serif);font-size:27px;font-weight:600;line-height:1.2;margin:7px 0 8px;}
.deck .ddesc{color:var(--soft);font-size:13.5px;line-height:1.6;}
.deck .dmeta{margin-top:16px;padding-top:14px;border-top:1px solid var(--rule);
  font-size:12.5px;color:var(--soft);font-variant-numeric:tabular-nums;
  display:flex;gap:14px;flex-wrap:wrap;}
.deck .dmeta b{color:var(--ink);font-weight:600;}

/* board */
.board{display:grid;grid-template-columns:repeat(auto-fill,minmax(30px,1fr));gap:4px;margin:0 0 14px;}
.cell{position:relative;aspect-ratio:1;border:1px solid var(--rule);background:var(--paper);
  border-radius:3px;font-size:10.5px;color:var(--soft);cursor:pointer;padding:0;
  display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;
  transition:transform .08s ease;}
.cell:hover{border-color:var(--deep);color:var(--ink);}
.cell:active{transform:scale(.92);}
.cell.o{background:var(--rightbg);border-color:#A9C6B4;color:var(--right);}
.cell.x1{background:#F2E3DF;border-color:#D6ADA3;color:var(--wrong);}
.cell.x2{background:#E3BFB6;border-color:#C08D80;color:#7C2A1D;}
.cell.x3{background:#C98F80;border-color:#A9705F;color:#fff;}
.cell.fill{background:#D8DFD6;border-color:#A9B4A5;color:var(--ink);}
.cell.now{outline:2px solid var(--deep);outline-offset:1px;}
.cell.st::after{content:"";position:absolute;top:2px;right:2px;width:4px;height:4px;
  border-radius:50%;background:var(--gold);}
.legend{display:flex;flex-wrap:wrap;gap:16px;align-items:center;font-size:12.5px;color:var(--soft);
  padding-bottom:22px;border-bottom:1px solid var(--rule);}
.legend b{color:var(--ink);font-weight:600;font-variant-numeric:tabular-nums;}
.linkish{background:none;border:none;padding:0;font:inherit;font-size:12.5px;color:var(--soft);
  text-decoration:underline;text-underline-offset:3px;cursor:pointer;}
.linkish:hover{color:var(--wrong);}
.linkish:disabled{opacity:.4;cursor:default;text-decoration:none;}
.resets{display:flex;flex-wrap:wrap;gap:18px;padding:16px 0 0;}

/* mode rows */
.mode{width:100%;text-align:left;background:none;border:none;border-bottom:1px solid var(--rule);
  padding:20px 2px;display:flex;align-items:baseline;gap:16px;cursor:pointer;font:inherit;color:inherit;}
.mode:hover .mname{color:var(--deep);}
.mode:disabled{opacity:.45;cursor:default;}
.mname{font-family:var(--serif);font-size:19px;font-weight:600;flex:0 0 auto;min-width:158px;}
.mdesc{color:var(--soft);font-size:13px;flex:1;}
.mmeta{color:var(--soft);font-size:12.5px;font-variant-numeric:tabular-nums;}
.counts{display:flex;gap:8px;padding:14px 0 0;flex-wrap:wrap;}
.chip{border:1px solid var(--rule);background:var(--paper);border-radius:99px;padding:5px 13px;
  cursor:pointer;color:var(--soft);font:inherit;font-size:12.5px;}
.chip.on{border-color:var(--deep);background:var(--deep);color:#fff;}

/* exam history */
.hist{width:100%;text-align:left;background:none;border:none;border-top:1px solid var(--rule);
  padding:14px 2px;display:flex;align-items:baseline;gap:14px;cursor:pointer;font:inherit;color:inherit;}
.hist:hover{background:var(--paper);}
.hist .hd{color:var(--soft);font-size:12.5px;flex:0 0 116px;font-variant-numeric:tabular-nums;}
.hist .hs{font-family:var(--serif);font-size:16px;font-weight:600;flex:0 0 82px;font-variant-numeric:tabular-nums;}
.hist .hp{flex:1;color:var(--soft);font-size:13px;font-variant-numeric:tabular-nums;}
.hist .hgo{color:var(--soft);font-size:12.5px;}
.histfoot{border-top:1px solid var(--rule);padding-top:14px;font-size:12.5px;color:var(--soft);}

/* topbar */
.top{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--rule);}
.topin{max-width:760px;margin:0 auto;padding:12px 22px;display:flex;align-items:center;gap:14px;}
.pos{font-size:13px;color:var(--soft);font-variant-numeric:tabular-nums;}
.bar{flex:1;height:2px;background:var(--rule);position:relative;overflow:hidden;}
.bar i{position:absolute;left:0;top:0;bottom:0;background:var(--deep);transition:width .25s ease;}
.iconbtn{background:none;border:none;cursor:pointer;font:inherit;font-size:13px;color:var(--soft);padding:4px 6px;}
.iconbtn:hover{color:var(--ink);}
.star{font-size:17px;line-height:1;color:var(--rule);}
.star.on{color:var(--gold);}

/* question */
.qno{font-size:12.5px;color:var(--soft);font-variant-numeric:tabular-nums;margin-bottom:10px;}
.qno .tally{color:var(--wrong);}
.qtext{font-family:var(--serif);font-size:19px;line-height:1.5;white-space:pre-wrap;margin-bottom:6px;}
.hint{font-size:12.5px;color:var(--soft);margin-bottom:20px;}
.opts{display:flex;flex-direction:column;gap:8px;}
.opt{display:flex;gap:0;align-items:stretch;text-align:left;width:100%;background:var(--paper);
  border:1px solid var(--rule);border-radius:4px;cursor:pointer;font:inherit;color:inherit;padding:0;
  transition:border-color .12s ease,background .12s ease;}
.opt:hover{border-color:#9AA79D;}
.opt .ltr{flex:0 0 40px;display:flex;align-items:center;justify-content:center;
  border-right:1px solid var(--rule);color:var(--soft);font-size:13px;font-weight:600;}
.opt .txt{padding:12px 14px;flex:1;font-size:14.5px;line-height:1.5;white-space:pre-wrap;}
.opt .mk{flex:0 0 34px;display:flex;align-items:center;justify-content:center;font-size:14px;}
.opt.sel{border-color:var(--deep);background:#EAF0EB;}
.opt.sel .ltr{border-color:#A9C6B4;color:var(--deep);}
.opt.ok{border-color:var(--right);background:var(--rightbg);}
.opt.ok .ltr,.opt.ok .mk{color:var(--right);border-color:#A9C6B4;}
.opt.no{border-color:var(--wrong);background:var(--wrongbg);}
.opt.no .ltr,.opt.no .mk{color:var(--wrong);border-color:#D6ADA3;}
.opt:disabled{cursor:default;}

/* verdict + actions */
.verdict{margin-top:20px;padding:13px 15px;border-radius:4px;font-size:14px;display:flex;
  justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;}
.verdict.ok{background:var(--rightbg);color:var(--right);}
.verdict.no{background:var(--wrongbg);color:var(--wrong);}
.verdict b{font-weight:600;letter-spacing:.06em;}
.actions{display:flex;gap:10px;margin-top:22px;align-items:center;flex-wrap:wrap;}
.btn{border:1px solid var(--deep);background:var(--deep);color:#fff;border-radius:4px;
  padding:11px 22px;font:inherit;font-size:14px;cursor:pointer;}
.btn:hover{background:#0B3B2C;}
.btn:disabled{opacity:.35;cursor:default;}
.btn.ghost{background:none;color:var(--ink);border-color:var(--rule);}
.btn.ghost:hover{background:var(--paper);border-color:#9AA79D;}
.btn.danger{background:var(--wrong);border-color:var(--wrong);}
.btn.danger:hover{background:#832F21;}
.keys{font-size:12px;color:var(--soft);margin-top:20px;}
kbd{font-family:var(--sans);font-size:11px;border:1px solid var(--rule);background:var(--paper);
  border-radius:3px;padding:1px 5px;margin:0 1px;}

/* result */
.score{font-family:var(--serif);font-size:52px;font-weight:600;line-height:1;font-variant-numeric:tabular-nums;}
.scoresub{color:var(--soft);font-size:13.5px;margin-top:10px;}
.rev{border-top:1px solid var(--rule);padding:20px 0;}
.rev .rq{font-family:var(--serif);font-size:15.5px;line-height:1.5;white-space:pre-wrap;margin:6px 0 12px;}
.pill{display:inline-block;font-size:12px;padding:2px 9px;border-radius:99px;margin-right:6px;}
.pill.ok{background:var(--rightbg);color:var(--right);}
.pill.no{background:var(--wrongbg);color:var(--wrong);}
.ansline{font-size:13px;color:var(--soft);margin-top:4px;}
.ansline em{font-style:normal;color:var(--ink);font-weight:600;}
.revhead{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:34px 0 0;}
.empty{color:var(--soft);font-size:14px;padding:40px 0;}

/* dialog */
.ovl{position:fixed;inset:0;background:rgba(21,32,26,.42);z-index:60;
  display:flex;align-items:center;justify-content:center;padding:22px;}
.dlg{background:var(--paper);border:1px solid var(--rule);border-radius:6px;
  padding:24px 24px 20px;max-width:410px;width:100%;box-shadow:0 18px 40px rgba(21,32,26,.18);}
.dlg p{margin:0 0 22px;font-size:14.5px;line-height:1.6;}
.dlg .row{display:flex;gap:10px;justify-content:flex-end;}

@media (max-width:600px){
  .col{padding:26px 16px 80px;}
  .deck{padding:20px 18px 18px;}
  .deck .dname{font-size:22px;}
  .topin{padding:10px 16px;}
  h1.title{font-size:27px;}
  .mode{flex-direction:column;gap:4px;padding:16px 2px;}
  .mname{min-width:0;font-size:17px;}
  .qtext{font-size:17px;}
  .board{grid-template-columns:repeat(auto-fill,minmax(26px,1fr));}
  .score{font-size:42px;}
  .hist{flex-wrap:wrap;gap:6px 14px;}
  .hist .hd{flex:0 0 100%;}
  .hist .hgo{display:none;}
}
@media (prefers-reduced-motion:reduce){ .fsc *{transition:none!important;} }
.fsc button:focus-visible{outline:2px solid var(--deep);outline-offset:2px;}
`;
