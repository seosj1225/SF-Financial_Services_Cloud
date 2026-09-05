# FSC Quiz

Salesforce Financial Services Cloud(FSC) 자격증 대비 문제풀이 앱. 단일 React 컴포넌트로 구성되어 있으며 172개의 문항을 포함합니다.

## 기능

- 전체 문제 풀이 / 랜덤 출제
- 즐겨찾기(별표) 문항 모아보기
- 오답 노트 — 내 답과 정답을 나란히 비교
- 진행 상황 로컬 저장

## 실행

```bash
npm install
npm run dev
```

## 구조

- `src/FscQuiz.jsx` — 문제 데이터와 퀴즈 UI 전체
- `src/main.jsx` — 진입점

## 배포

`main` 브랜치에 푸시하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드 후 GitHub Pages로 배포한다.

최초 1회 설정: 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 변경.

배포 주소: https://seosj1225.github.io/SF-Financial_Services_Cloud/
