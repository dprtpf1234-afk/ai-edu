# AI · 디지털 교육 자료

구글 사이트도구로 만들었던 **AI·디지털 교육 자료 모음** 사이트를 디자인을 자유롭게 바꿀 수 있는 정적 웹앱으로 옮긴 버전입니다.
별도 서버나 빌드 과정 없이 **GitHub Pages** 로 무료 배포할 수 있습니다.

## 폴더 구성

```
index.html        ← 화면 뼈대 (거의 수정할 일 없음)
css/style.css     ← 디자인 (맨 위 :root 의 색상만 바꿔도 분위기가 바뀝니다)
js/data.js        ← ★ 모든 페이지·링크·설명 (자료 추가/수정은 이 파일만!)
js/app.js         ← 메뉴, 검색, 화면 그리기 기능
assets/favicon.svg← 브라우저 탭 아이콘
.nojekyll         ← GitHub Pages 설정용 빈 파일 (지우지 마세요)
```

## 주요 기능

- 원본 사이트와 같은 구성: 어두운 지도 배경 + 큰 제목 + 빨간 밑줄, 상단 메뉴와 ‘더보기’
- 페이지 7개(홈, 여러 유용한 사이트, 과목별 에듀테크, 인공지능, 피지컬AI, 코딩, 학습 데이터)
- 모든 자료를 카드로 정리: 사이트 아이콘, 한 줄 요약, 자세한 설명, **바로가기 버튼(새 창)**
- 🔍 전체 검색 (돋보기 버튼 또는 키보드 `/`) — 모든 페이지의 자료를 이름·설명으로 검색
- 페이지 안 섹션 바로가기 칩, 맨 위로 버튼
- 모바일 화면 대응 (☰ 메뉴)

---

## 1. 자료 추가·수정 방법

`js/data.js` 를 열고 원하는 섹션의 `items` 안에 아래 덩어리를 복사해 붙여 넣으세요.

```js
{
  name: "사이트 이름",
  url: "https://주소",
  desc: "한 줄 요약",
  detail: "자세한 설명"
},
```

- 쉼표(`,`)와 따옴표(`"`)를 빠뜨리지 않도록 주의하세요.
- `url` 을 비워 두면 버튼이 ‘준비 중’으로 표시됩니다.
- 새 페이지를 만들려면 `pages` 배열에 페이지 하나를 통째로 복사해 `id`(영문 주소), `title` 을 바꾸면 메뉴에 자동으로 추가됩니다.

GitHub 웹사이트에서 바로 수정할 수도 있습니다: 저장소 → `js/data.js` → 연필(✏️) 아이콘 → 수정 → **Commit changes**. 1~2분 뒤 사이트에 반영됩니다.

---

## 2. GitHub Pages 로 배포하기

### 방법 A. 웹 브라우저만으로 (git 설치 불필요, 추천)

1. [github.com](https://github.com) 에 로그인 후 오른쪽 위 **+ → New repository**
2. Repository name 에 예: `ai-edu` 입력, **Public** 선택 → **Create repository**
3. 만들어진 저장소 화면에서 **uploading an existing file** 링크 클릭
4. 이 폴더 안의 파일과 폴더(`index.html`, `css`, `js`, `assets`, `.nojekyll`, `README.md`)를 **모두 끌어다 놓기** → **Commit changes**
   - `.nojekyll` 처럼 점으로 시작하는 파일은 탐색기에서 숨겨져 있을 수 있습니다. 보이지 않으면 빼도 사이트는 정상 동작합니다.
5. 저장소의 **Settings → Pages** 로 이동
6. **Build and deployment → Source** 를 `Deploy from a branch`, Branch 를 `main` / `/ (root)` 로 선택 → **Save**
7. 1~2분 뒤 같은 화면 위쪽에 주소가 나타납니다:
   `https://<내 GitHub 아이디>.github.io/ai-edu/`

### 방법 B. git 명령어로

```bash
git init
git add .
git commit -m "AI·디지털 교육 자료 사이트"
git branch -M main
git remote add origin https://github.com/<내 아이디>/ai-edu.git
git push -u origin main
```

그 다음 위 5~7단계(Settings → Pages)를 똑같이 진행합니다.

### 배포 후 하면 좋은 것

`js/data.js` 맨 위의 `editUrl` 에 아래 주소를 넣으면, 홈 화면에 **✏️ 자료 수정하기** 버튼이 생겨 바로 편집 화면으로 갈 수 있습니다.

```js
editUrl: "https://github.com/<내 아이디>/ai-edu/edit/main/js/data.js",
```

---

## ⚠️ 공개 범위 주의

- 무료 GitHub Pages 사이트는 **주소를 아는 누구나 볼 수 있는 공개 사이트**입니다. (원본 구글 사이트의 ‘외부에 배포하지 말아주세요’ 안내와 다릅니다.)
- 개인정보(출장 계획, 학생·교사 명단 등)는 이 사이트에 직접 올리지 말고, **공유 권한이 제한된 구글 문서 링크**로만 연결하세요.
- 구글 사이트처럼 ‘누구나 수정’ 기능은 없습니다. 함께 관리할 선생님은 저장소 **Settings → Collaborators** 에서 초대하면 됩니다.

## 내 컴퓨터에서 미리 보기

`index.html` 파일을 더블클릭해서 브라우저로 열면 바로 확인할 수 있습니다.
