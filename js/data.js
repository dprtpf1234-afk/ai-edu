/*
 * ─────────────────────────────────────────────────────────────
 *  사이트의 모든 내용은 이 파일 하나에서 관리합니다.
 *  - 자료(링크) 추가: 원하는 섹션의 items 배열에 { ... } 한 덩어리를 복사해 붙여넣고 내용만 바꾸세요.
 *  - 섹션 추가: sections 배열에 { title: "...", items: [] } 를 추가하세요.
 *  - 페이지 추가: pages 배열에 새 페이지 객체를 추가하면 메뉴에 자동으로 나타납니다.
 *
 *  item 항목 설명
 *    name   : 버튼에 표시될 이름 (필수)
 *    url    : 연결할 주소 (필수, 비워두면 '준비 중'으로 표시)
 *    desc   : 한 줄 요약 (굵게 표시)
 *    detail : 자세한 설명 (선택)
 *    tag    : 작은 꼬리표 (선택, 예: "Google Drive", "확장 프로그램")
 * ─────────────────────────────────────────────────────────────
 */

window.SITE = {
  title: "AI · 디지털 교육 자료",
  // GitHub 저장소의 data.js 편집 주소를 넣으면 홈 화면에 '자료 수정하기' 버튼이 생깁니다.
  // 예) "https://github.com/아이디/저장소이름/edit/main/js/data.js"
  editUrl: "",
  updated: "2026-10-17",

  home: {
    heroTitle: "AI·디지털 교육 자료 모음",
    notices: [
      "AI·디지털 교육에 필요한 자료를 한곳에 모았습니다.",
      "상단 메뉴(모바일은 오른쪽 위 ☰ 버튼)에서 원하는 페이지를 골라 이용해주세요.",
      "돋보기 버튼으로 모든 페이지의 자료를 한 번에 검색할 수 있습니다.",
      "항상 제작 중에 있습니다.... 빈 칸이 있더라도 놀라지 마시고 그러려니 부탁드립니다."
    ]
  },

  pages: [
    /* ───────────────────────── 여러 유용한 사이트 ───────────────────────── */
    {
      id: "useful",
      title: "여러 유용한 사이트",
      icon: "🧰",
      summary: "수업 준비, 퀴즈, 의견 수합, URL 단축, 웹 배포 도구",
      sections: [
        {
          title: "수업 준비 및 수업 때 유용한 기능 (교사)",
          items: [
            {
              name: "줌잇(ZOOMIT)",
              url: "https://learn.microsoft.com/ko-kr/sysinternals/downloads/zoomit",
              tag: "윈도우 프로그램",
              desc: "화면 확대와 실시간 판서가 가능한 발표 보조 도구",
              detail: "단축키로 화면의 특정 부분을 확대하고, 화면 위에 글씨나 도형을 그리며 설명할 수 있습니다."
            },
            {
              name: "Snipaste",
              url: "https://www.snipaste.com/",
              tag: "윈도우·맥 프로그램",
              desc: "캡처 후 화면에 고정(Pin)할 수 있는 캡처 프로그램",
              detail: "원하는 영역을 빠르게 캡처한 뒤 반투명 창으로 화면 맨 위에 띄워 두고, 자료를 참고하며 작업할 수 있습니다."
            },
            {
              name: "드래그 프리",
              url: "https://chromewebstore.google.com/detail/%EB%93%9C%EB%9E%98%EA%B7%B8%ED%94%84%EB%A6%AC%EB%A7%88%EC%9A%B0%EC%8A%A4%EC%A0%9C%ED%95%9C-%ED%95%B4%EC%A0%9C+%EA%B8%80%EC%9E%90%EC%88%98%EC%84%B8%EA%B8%B0+%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%A0%80%EC%9E%A5/cnfngpgfjllafbghaimjcmailafcdhod?utm_source=ext_app_menu",
              tag: "크롬 확장 프로그램",
              desc: "우클릭·드래그 제한을 풀어 주는 브라우저 확장 프로그램",
              detail: "복사나 드래그가 막힌 웹페이지에서 텍스트를 자유롭게 선택할 수 있게 해 줍니다."
            },
            {
              name: "감마AI",
              url: "https://gamma.app/create/generate",
              desc: "주제만 입력하면 발표 자료(PPT)를 만들어 주는 AI",
              detail: "생성된 슬라이드의 문장, 이미지, 레이아웃을 하나하나 수정할 수 있고 PPT 파일로 내려받을 수 있습니다."
            },
            {
              name: "클래스툴",
              url: "https://ctool.co.kr/",
              desc: "실시간 상호작용 수업 지원 올인원 도구",
              detail: "화면 공유, 화이트보드, 웹링크 전송, OX·객관식 퀴즈, 학생 화면 모니터링을 지원하며 학생은 회원가입 없이 클래스 코드로 참여합니다."
            },
            {
              name: "캔바 AI",
              url: "https://www.canva.com/ai",
              desc: "캔바에 내장된 AI 디자인·글쓰기 기능",
              detail: "수업 활동지와 슬라이드를 빠르게 제작하고, 페이지 번역과 음성 삽입까지 할 수 있습니다."
            }
          ]
        },
        {
          title: "수업할 때 유용한 기능 (학생)",
          items: [
            {
              name: "스노클",
              url: "https://snorkl.app/",
              desc: "학생의 풀이 설명에 AI가 즉시 피드백하는 플랫폼",
              detail: "학생이 화면에 풀이를 쓰고 목소리로 설명을 녹음하면, AI가 생각 과정을 분석해 바로 피드백을 줍니다."
            },
            {
              name: "스노클(사용방법)",
              url: "https://www.youtube.com/watch?v=TuReGPbbhWc",
              tag: "YouTube",
              desc: "스노클 사용 방법 안내 영상",
              detail: "과제 만들기부터 학생 참여, 피드백 확인까지 스노클의 기본 사용 흐름을 영상으로 확인할 수 있습니다."
            }
          ]
        },
        {
          title: "학습 정리 퀴즈",
          items: [
            {
              name: "김킷",
              url: "https://www.gimkit.com/",
              desc: "게임으로 복습하는 실시간 참여형 퀴즈 플랫폼",
              detail: "정답을 맞혀 얻은 가상 화폐로 아이템을 사거나 전략을 펼치며 학습에 몰입할 수 있습니다."
            },
            {
              name: "띵커벨",
              url: "https://www.tkbell.co.kr/user/main.do?oauth2=ok&localeLanguage=ko&currentURL=%2Fuser%2Foauth2%2Foauth2LoginCheckCallback.do",
              desc: "국내 수업 환경에 맞춘 상호작용형 퀴즈·평가 도구",
              detail: "퀴즈, 워크시트, 보드 활동으로 학생의 이해도를 실시간으로 확인하고 피드백할 수 있습니다."
            },
            {
              name: "블루킷",
              url: "https://www.blooket.com/",
              desc: "다양한 게임 모드의 액션형 온라인 퀴즈",
              detail: "타워 디펜스, 레이스, 농장 경영 등 미니게임 형식으로 퀴즈를 풀며 학습 효과를 높입니다."
            },
            {
              name: "젭퀴즈",
              url: "https://quiz.zep.us/",
              desc: "메타버스 공간에서 푸는 퀴즈 플랫폼",
              detail: "아바타를 움직여 가상 공간을 탐험하며 O/X 퀴즈나 객관식 문제에 참여합니다."
            },
            {
              name: "패들렛 아케이드",
              url: "https://arcade.padlet.com/?utm_source=padlet_com_production&utm_medium=padlet_com_app_nav_dashboard&utm_campaign=promote_ta_on_padlet_app&utm_content=padlet_com_nav_desktop",
              desc: "수업 자료를 게임으로 바꿔 주는 AI 게임 제작 도구",
              detail: "주제나 문서, 웹 링크를 넣으면 AI가 짝맞추기·플래시카드·객관식 등 학습 게임을 빠르게 만들어 줍니다."
            }
          ]
        },
        {
          title: "의견 수합",
          items: [
            {
              name: "멘티미터",
              url: "https://www.mentimeter.com/",
              desc: "실시간 투표·워드클라우드 프레젠테이션 도구",
              detail: "투표, 워드클라우드, 퀴즈, Q&A 슬라이드로 학생 의견을 즉시 모으고 시각화합니다."
            },
            {
              name: "심스페이스",
              url: "https://diary.seamspace.me/login",
              desc: "AI 기반 학생 마음건강·사회정서학습(SEL) 플랫폼",
              detail: "학생 감정 일기를 AI가 분석해 학급 정서 상태와 위기 신호를 교사 대시보드로 안내합니다."
            },
            {
              name: "패들렛",
              url: "https://padlet.com/",
              desc: "의견과 자료를 함께 붙이는 디지털 협업 담벼락",
              detail: "텍스트, 이미지, 영상, 링크를 메모지처럼 게시해 모둠 활동, 브레인스토밍, 과제 수집에 활용합니다."
            },
            {
              name: "패들렛 샌드박스",
              url: "https://padlet.com/site/sandbox",
              desc: "패들렛의 자유 캔버스형 협업 화이트보드",
              detail: "빈 캔버스 위에 그림, 글, 카드, 영상을 자유롭게 배치하며 실시간으로 함께 작업할 수 있습니다."
            },
            {
              name: "캔바(라이브 기능)",
              url: "https://www.canva.com/",
              desc: "발표 중 청중과 실시간으로 소통하는 캔바 라이브",
              detail: "발표 화면의 링크나 QR코드로 학생들이 질문·의견을 보내면 발표 화면에 실시간으로 띄울 수 있습니다."
            }
          ]
        },
        {
          title: "수업에 바로 쓸 수 있는 에듀테크",
          items: [
            {
              name: "에듀베이지",
              url: "https://www.edubeige.com/",
              desc: "선생님을 위한 에듀테크 수업 아이디어 모음",
              detail: "국어·수학·학급경영 등 과목과 상황별로 에듀테크 도구와 활용 수업 사례를 찾아볼 수 있습니다."
            }
          ]
        },
        {
          title: "에듀테크 모음",
          items: [
            {
              name: "에듀집",
              url: "https://www.edzip.kr/",
              desc: "다양한 에듀테크 서비스를 모아 소개하는 플랫폼",
              detail: "분야별 에듀테크 서비스 정보를 한곳에서 비교하고 수업에 맞는 도구를 고를 수 있습니다."
            }
          ]
        },
        {
          title: "URL 단축 서비스",
          items: [
            {
              name: "숏.한국",
              url: "https://xn--0p4b.xn--3e0b707e/",
              desc: "한글 도메인 기반 URL 단축 서비스",
              detail: "긴 링크를 기억하기 쉬운 짧은 한글 주소로 바꿔 학생들에게 쉽게 안내할 수 있습니다."
            },
            {
              name: "bit.ly",
              url: "https://bitly.com/",
              desc: "전 세계에서 널리 쓰이는 URL 단축 서비스",
              detail: "짧은 링크와 QR코드를 만들고 클릭 수 통계를 확인할 수 있습니다. (회원가입 필요)"
            },
            {
              name: "enn.kr",
              url: "https://u.lrl.kr/",
              desc: "간편한 무료 URL 단축 서비스",
              detail: "회원가입 없이 긴 주소를 붙여 넣기만 하면 짧은 링크를 바로 만들 수 있습니다."
            }
          ]
        },
        {
          title: "HTML 배포 사이트",
          items: [
            {
              name: "깃허브(GitHub)",
              url: "https://github.com/",
              desc: "코드 저장소이자 무료 웹사이트 배포(GitHub Pages) 서비스",
              detail: "직접 만든 HTML 파일을 저장소에 올리고 Pages 기능을 켜면 무료로 웹사이트 주소를 받을 수 있습니다. 이 사이트도 GitHub Pages로 배포되었습니다."
            },
            {
              name: "Vercel",
              url: "https://vercel.com/",
              desc: "GitHub와 연동되는 웹사이트 자동 배포 플랫폼",
              detail: "GitHub 저장소를 연결하면 코드를 올릴 때마다 자동으로 사이트가 갱신됩니다."
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 과목별 에듀테크 ───────────────────────── */
    {
      id: "edutech",
      title: "과목별 에듀테크",
      icon: "📚",
      summary: "국어·수학·미술 등 교과별로 바로 쓰는 에듀테크 도구",
      sections: [
        {
          title: "국어",
          items: [
            {
              name: "표준국어대사전",
              url: "https://stdict.korean.go.kr/",
              desc: "국립국어원이 만든 공식 국어사전",
              detail: "낱말의 뜻, 발음, 활용형, 예문을 정확하게 찾아볼 수 있어 낱말 탐구와 국어사전 활용 수업에 쓰기 좋습니다."
            },
            {
              name: "우리말샘",
              url: "https://opendict.korean.go.kr/",
              desc: "국립국어원의 참여형 국어사전",
              detail: "신조어·지역어·전문어까지 폭넓게 실려 있고 그림 자료도 함께 볼 수 있어, 표준국어대사전과 비교하며 낱말을 탐구할 수 있습니다."
            },
            {
              name: "바른한글 맞춤법 검사기",
              url: "https://nara-speller.co.kr/speller/",
              desc: "부산대학교와 나라인포테크가 만든 맞춤법·문법 검사기",
              detail: "글을 붙여 넣으면 틀린 맞춤법과 띄어쓰기를 찾아 고칠 말과 이유를 알려 줘, 글쓰기 후 스스로 고쳐 쓰기 활동에 활용할 수 있습니다."
            }
          ]
        },
        {
          title: "수학",
          items: [
            {
              name: "똑똑 수학탐험대",
              url: "https://www.toctocmath.kr/",
              desc: "교육부·한국과학창의재단의 초등 수학 AI 학습 플랫폼",
              detail: "게임형 탐험 활동으로 수학 개념을 익히고, AI가 학생별 학습 결과를 분석해 맞춤형 활동을 추천합니다."
            },
            {
              name: "통계놀이터",
              url: "https://kosis.kr/edu/index/index.do?sso=ok",
              desc: "통계청 KOSIS의 어린이·청소년 통계 교육 사이트",
              detail: "그래프 그리기, 통계 퀴즈, 통계 활용 사례 등으로 자료와 가능성 단원 수업에 활용하기 좋습니다."
            },
            {
              name: "알지오매스",
              url: "https://www.algeomath.kr/",
              desc: "한국과학창의재단의 수학 탐구 플랫폼",
              detail: "도형 그리기, 그래프 그리기, 블록 코딩 기능으로 수학 개념을 직접 조작하며 탐구할 수 있고, 교과 연계 활동 자료도 제공합니다."
            }
          ]
        },
        {
          title: "과학",
          items: [
            {
              name: "스텔라리움 웹",
              url: "https://stellarium-web.org/",
              desc: "브라우저에서 보는 실시간 밤하늘 별자리 지도",
              detail: "날짜·시간·장소를 바꾸며 별자리와 행성, 달의 위치를 확인할 수 있어 지구와 우주 단원 수업에 활용하기 좋습니다."
            }
          ]
        },
        {
          title: "사회",
          items: [
            {
              name: "구글 어스",
              url: "https://earth.google.com/web/",
              desc: "3D 지구본으로 세계 곳곳을 탐험하는 구글 지도 서비스",
              detail: "위성 사진과 3D 지형, 스트리트 뷰로 우리 지역과 세계 여러 나라의 자연환경과 인문환경을 생생하게 살펴볼 수 있습니다."
            }
          ]
        },
        {
          title: "영어",
          items: [
            {
              name: "퀴즐렛",
              url: "https://quizlet.com/kr",
              desc: "낱말 카드와 학습 게임으로 단어를 익히는 학습 도구",
              detail: "영어 단어 세트를 만들어 플래시카드, 짝맞추기, 테스트 등 여러 방식으로 반복 학습할 수 있습니다."
            },
            {
              name: "Storyline Online",
              url: "https://storylineonline.net/",
              desc: "배우들이 영어 그림책을 읽어 주는 무료 영상 사이트",
              detail: "그림책 장면과 함께 원어민의 실감 나는 낭독을 들을 수 있어 영어 듣기와 읽기 수업에 활용하기 좋습니다."
            }
          ]
        },
        {
          title: "음악",
          items: [
            {
              name: "크롬 뮤직랩",
              url: "https://musiclab.chromeexperiments.com/",
              desc: "놀이처럼 음악 원리를 체험하는 구글의 음악 실험실",
              detail: "송 메이커, 리듬, 화음, 소리 파형 등 다양한 실험으로 설치 없이 바로 작곡하고 음악 요소를 탐구할 수 있습니다."
            }
          ]
        },
        {
          title: "미술",
          items: [
            {
              name: "투닝",
              url: "https://tooning.io/",
              desc: "AI로 웹툰·캐릭터를 쉽게 만드는 디지털 창작 도구",
              detail: "글만 입력해도 AI가 장면을 만들어 주고, 캐릭터 표정·동작을 바꿔 4컷 만화나 학습 만화를 손쉽게 제작할 수 있습니다."
            },
            {
              name: "캔바",
              url: "https://www.canva.com/",
              desc: "템플릿 기반 온라인 디자인 도구",
              detail: "포스터, 카드뉴스, 프레젠테이션 등을 다양한 템플릿으로 쉽게 디자인하고 모둠별로 함께 편집할 수 있습니다."
            },
            {
              name: "구글 아트 앤 컬처",
              url: "https://artsandculture.google.com/",
              desc: "세계 미술관·박물관 작품을 고화질로 감상하는 구글 서비스",
              detail: "명화를 확대해 붓 터치까지 살펴보고, 가상 미술관 투어와 다양한 미술 놀이 실험으로 감상 수업을 할 수 있습니다."
            },
            {
              name: "미리캔버스",
              url: "https://www.miricanvas.com/",
              desc: "한글 템플릿이 풍부한 국내 온라인 디자인 도구",
              detail: "포스터, 카드뉴스, 상장, 학급 게시물 등을 한글 글꼴과 템플릿으로 쉽게 만들 수 있습니다."
            }
          ]
        },
        {
          title: "실과",
          items: [
            {
              name: "농사로",
              url: "https://www.nongsaro.go.kr/",
              desc: "농촌진흥청의 농업기술 정보 포털",
              detail: "작물별 재배 방법과 시기, 병해충 정보를 찾아볼 수 있어 식물 기르기와 텃밭 가꾸기 단원에 활용하기 좋습니다."
            },
            {
              name: "커리어넷",
              url: "https://www.career.go.kr/",
              desc: "교육부·한국직업능력연구원의 진로 정보 사이트",
              detail: "진로 심리검사, 직업 정보, 학과 정보, 진로 활동 자료를 제공해 일과 직업·진로 탐색 수업에 활용할 수 있습니다."
            }
          ]
        },
        { title: "체육", items: [] }
      ]
    },

    /* ───────────────────────── 인공지능(AI) ───────────────────────── */
    {
      id: "ai",
      title: "인공지능(AI)",
      icon: "🤖",
      summary: "AI 원리 이해부터 이미지·동작·사물 인식, 음악, 생성형 AI, 윤리까지",
      intro: {
        heading: "인공지능 (AI)",
        text: "인공지능(artificial intelligence, AI)은 컴퓨터가 학습, 추론, 지각, 언어 처리, 문제 해결, 계획과 의사 결정처럼 지능과 관련된 일을 수행하도록 하는 방법을 연구하는 컴퓨터 과학 분야이다. 이러한 방법으로 만든 프로그램이나 기계도 인공지능이라고 부른다.",
        source: "위키백과"
      },
      sections: [
        {
          title: "인공지능(AI) 교육영상",
          items: [
            {
              name: "인공지능 교육영상",
              url: "https://www.youtube.com/playlist?list=PLi9w7Ax2qVA9z-gT2YxmSyB0WJC3omJrX",
              tag: "YouTube",
              desc: "인공지능의 개념과 원리를 쉽게 풀어 설명하는 교육용 영상 재생목록",
              detail: "수업 도입이나 개념 정리 시간에 학생들과 함께 시청하기 좋은 영상들을 한곳에 모아 두었습니다."
            }
          ]
        },
        {
          title: "인공지능(AI) 원리 이해",
          items: [
            {
              name: "퀵 드로우",
              url: "https://quickdraw.withgoogle.com/?locale=ko",
              desc: "구글이 만든 낙서 인식 인공지능 게임",
              detail: "제시어를 보고 그림을 그리면 인공지능이 실시간으로 무엇인지 맞히며, 데이터를 학습하는 방식을 체험할 수 있습니다."
            },
            {
              name: "티처블 머신",
              url: "https://teachablemachine.withgoogle.com/",
              desc: "코딩 없이 웹캠·마이크로 머신러닝 모델을 만드는 구글의 교육용 도구",
              detail: "이미지, 소리, 자세 데이터를 직접 학습시켜 나만의 AI 분류 모델을 만들고, 엔트리 등 다른 도구로 내보내 활용할 수 있습니다."
            },
            {
              name: "AI for Oceans",
              url: "https://studio.code.org/courses/oceans/units/1/lessons/1/levels/1",
              desc: "Code.org의 해양 환경보호 테마 인공지능 교육 프로그램",
              detail: "바다 쓰레기와 물고기를 AI에게 학습시키는 과정을 통해 머신러닝의 데이터 분류 원리와 편향성을 배웁니다."
            },
            {
              name: "악어를 이겨라!",
              url: "https://www.stefanseegerer.de/schlag-das-krokodil/",
              desc: "게임으로 배우는 강화학습 원리 체험",
              detail: "사람이 조종하는 원숭이와 AI 악어가 대결하며, 승패에 따라 토큰(보상/처벌)을 조정해 AI가 필승 전략을 학습하는 과정을 직접 확인합니다."
            },
            {
              name: "인공지능 스마트팜",
              url: "https://www.playsw.or.kr/ai-contents/practice/1",
              desc: "‘소프트웨어야 놀자’의 스마트팜 인공지능 체험 콘텐츠",
              detail: "농장을 배경으로 데이터를 모으고 AI를 학습시켜 작물을 관리해 보며, 데이터를 바탕으로 AI가 판단하는 원리를 단계별로 익힙니다."
            },
            {
              name: "Machine Learning for Kids",
              url: "https://machinelearningforkids.co.uk/",
              desc: "직접 학습시킨 AI 모델을 스크래치 프로젝트에 활용하는 교육 사이트",
              detail: "글·이미지·숫자·소리 데이터를 모아 분류 모델을 만들고, 스크래치 블록으로 불러와 챗봇이나 게임을 만들어 볼 수 있습니다. (일부 메뉴 영어)"
            },
            {
              name: "구글 AI 실험 모음",
              url: "https://experiments.withgoogle.com/collection/ai",
              desc: "구글이 만든 AI 체험 실험을 한곳에 모은 사이트",
              detail: "그림·음악·언어·카메라 등을 활용한 다양한 AI 실험을 둘러보며 수업에 쓸 새로운 체험 활동을 찾을 수 있습니다."
            }
          ]
        },
        {
          title: "인공지능(AI) 이미지 인식",
          items: [
            {
              name: "오토 드로우",
              url: "https://www.autodraw.com/",
              desc: "구글이 개발한 AI 기반 스케치 보조 도구",
              detail: "낙서하듯 대충 그린 스케치를 인공지능이 분석해, 완성도 높은 아이콘·일러스트로 바꿔 줍니다."
            },
            {
              name: "Animated Drawings",
              url: "https://sketch.metademolab.com/canvas",
              desc: "메타(Meta) AI 연구소의 그림 애니메이션 서비스",
              detail: "손으로 그린 캐릭터 그림을 올리면 인공지능이 관절을 인식해 뛰거나 춤추는 영상으로 만들어 줍니다."
            },
            {
              name: "표정 인식 체험",
              url: "https://ailearn.space/modules/faceApi/webcamFaceExpressionRecognition.html",
              desc: "웹캠으로 표정(감정)을 알아맞히는 체험 페이지",
              detail: "웹캠에 비친 얼굴을 AI가 실시간으로 찾아내 기쁨·슬픔·놀람 같은 표정을 분석해 보여줍니다."
            }
          ]
        },
        {
          title: "인공지능(AI) 동작 인식",
          items: [
            {
              name: "동작(코) 인식 게임",
              url: "https://vibertthio.com/posenet-whack-a-mole/",
              desc: "코를 움직여 두더지를 잡는 AI 두더지 게임",
              detail: "웹캠 앞에서 AI(PoseNet)가 내 코의 움직임을 인식해, 손 대신 코로 튀어나오는 두더지를 잡습니다."
            },
            {
              name: "동작 인식",
              url: "https://www.scroobly.com/",
              desc: "내 낙서 캐릭터가 내 몸동작을 따라 움직이는 체험",
              detail: "직접 그린 캐릭터를 웹캠 속 내 몸동작에 맞춰 AI가 움직여 주어, 그림이 살아 움직이는 것처럼 만들어 줍니다."
            },
            {
              name: "동작 만들기",
              url: "https://artsexperiments.withgoogle.com/living-archive",
              desc: "포즈를 이어 붙여 나만의 안무를 만드는 구글 예술 실험",
              detail: "다양한 무용 동작을 둘러보거나, 웹캠 앞에서 취한 포즈와 비슷한 동작을 찾아 이어 붙여 안무를 완성할 수 있습니다."
            }
          ]
        },
        {
          title: "인공지능(AI) 사물 인식",
          items: [
            {
              name: "사물 인식 게임",
              url: "https://archive.google/emojiscavengerhunt/",
              desc: "이모지 속 물건을 찾아 카메라로 비추는 구글 보물찾기 게임",
              detail: "화면에 나온 이모지(예: 🍌, 👟)와 같은 물건을 주변에서 찾아 카메라로 비추면, AI가 제한 시간 안에 알아맞히는지 겨룹니다."
            },
            {
              name: "구글 렌즈",
              url: "https://lens.google/intl/ko/",
              desc: "카메라·사진으로 검색하는 구글의 이미지 검색 도구",
              detail: "식물·동물 이름 찾기, 글자 번역·복사, 물건 검색 등 말로 설명하기 어려운 것도 사진 한 장으로 찾아 줍니다."
            }
          ]
        },
        {
          title: "인공지능(AI) 활용 음악 수업",
          items: [
            {
              name: "두들 바흐",
              url: "https://doodles.google/doodle/celebrating-johann-sebastian-bach/",
              desc: "바흐 스타일로 화음을 붙여 주는 구글 최초의 AI 두들",
              detail: "오선지에 두 마디 멜로디를 입력하면, 바흐의 곡 300여 편을 학습한 AI가 바흐풍 화음을 붙여 연주해 줍니다."
            },
            {
              name: "BLOB OPERA",
              url: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?cp=e30.",
              desc: "젤리 캐릭터로 오페라 화음을 만드는 구글 음악 놀이",
              detail: "캐릭터 4마리를 위아래로 끌어 음높이를 바꾸면, 성악가 목소리를 학습한 AI가 오페라처럼 화음을 넣어 노래합니다."
            },
            {
              name: "SUNO AI",
              url: "https://suno.com/home",
              desc: "글로 적은 분위기·가사로 노래를 완성해 주는 AI 작곡 서비스",
              detail: "원하는 장르나 가사를 입력하면 AI가 노래와 반주까지 완성된 곡을 만들어 줍니다. 학생과 사용할 때는 연령 제한과 이용약관을 먼저 확인하세요."
            },
            {
              name: "사운드 메이커",
              url: "https://experiments.withgoogle.com/ai/sound-maker/view/",
              desc: "두 소리를 섞어 새로운 소리를 만드는 구글 실험",
              detail: "플루트·기타·개 짖는 소리처럼 서로 다른 두 소리를 섞으면, AI가 세상에 없던 소리를 만들어 건반으로 연주할 수 있게 해 줍니다."
            }
          ]
        },
        {
          title: "학생용 생성형 AI",
          items: [
            {
              name: "우리아이AI",
              url: "https://wooriai.use.go.kr/start/agent",
              desc: "울산광역시교육청의 학생용 AI 학습 서비스",
              detail: "학생들이 AI에게 질문하며 스스로 공부할 수 있도록 만든 교육용 생성형 AI 서비스입니다."
            },
            {
              name: "미조우",
              url: "https://mizou.com/education",
              desc: "교사가 직접 설정하는 맞춤형 교육용 AI 챗봇",
              detail: "교사가 학습 목표와 규칙을 정해 수업용 AI 챗봇을 만들고, 학생들의 대화 내용을 확인하며 안전하게 생성형 AI를 활용할 수 있습니다."
            }
          ]
        },
        {
          title: "인공지능(AI) 윤리",
          items: [
            {
              name: "인공지능 사진 구별기",
              url: "https://artsandculture.google.com/experiment/wAHNn4JsVTFOiw?cp=eyJyZWZlcnJhbHNjb3JlIjoxNTR9&rs=eyJyZWZlcnJhbFNjb3JlIjoxNTR9",
              desc: "AI가 만든 ‘가짜’ 그림을 찾아내는 틀린 그림 찾기",
              detail: "실제 미술 작품과 유물 사진 사이에 몰래 섞인 AI 생성 그림 하나를 찾아내는 구글 아트 앤 컬처의 게임입니다."
            },
            {
              name: "어느 사진이 진짜일까?",
              url: "https://www.whichfaceisreal.com/",
              desc: "진짜 얼굴과 AI가 만든 얼굴을 구별하는 퀴즈",
              detail: "두 장의 얼굴 사진 중 진짜 사람을 맞혀 보며, AI가 만든 이미지를 알아보는 눈을 기릅니다."
            },
            {
              name: "인터랜드",
              url: "https://beinternetawesome.withgoogle.com/ko_kr/interland",
              desc: "안전한 인터넷 사용법을 배우는 구글의 어린이용 게임",
              detail: "네 개의 섬을 모험하며 개인정보 보호, 피싱·가짜 정보 구별, 사이버 괴롭힘 대처법을 익힙니다."
            },
            {
              name: "AI원리로 배우는 인공지능 윤리",
              url: "https://wzine.kr/goe_ai/01.html?pageNum=30",
              desc: "경기도교육청의 초등학생용 AI 윤리 디지털 교재",
              detail: "연결된 페이지는 ‘AI가 그린 그림이나 만든 음악을 어떻게 바라보고 써야 할까?’를 다루는 ‘인공지능과 예술’ 단원입니다."
            },
            {
              name: "Moral Machine",
              url: "https://www.moralmachine.net/hl/kr",
              desc: "MIT의 자율주행차 윤리 딜레마 체험 사이트",
              detail: "피할 수 없는 사고 상황에서 자율주행차가 누구를 보호해야 할지 직접 선택해 보고, 다른 사람들의 판단과 비교하며 AI 윤리를 토론할 수 있습니다."
            },
            {
              name: "Survival of the Best Fit",
              url: "https://www.survivalofthebestfit.com/",
              tag: "영어",
              desc: "AI 채용 시스템의 편향을 체험하는 게임",
              detail: "직접 지원자를 뽑아 AI를 학습시키는 과정에서, 데이터에 담긴 편견이 AI의 결정을 어떻게 불공정하게 만드는지 체험합니다."
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 피지컬AI ───────────────────────── */
    {
      id: "physical-ai",
      title: "피지컬AI",
      icon: "🦾",
      summary: "핑퐁로봇, 레고 스파이크, 마이크로비트, 햄스터 로봇, 아두이노 수업 자료",
      intro: {
        heading: "피지컬 AI (PHYSICAL AI)",
        text: "피지컬(physical), 즉 물리적이라는 뜻의 영어 형용사와 인공지능을 뜻하는 AI(Artificial Intelligence)의 합성어로, 디지털 공간에 한정된 기존 인공지능과 달리 물리적인 세계에서 직접 행동하고 상호 작용하도록 설계된 인공지능 시스템이다. 현실 세계에서 로봇, 자율주행차 등 자율 시스템이 물리적 세계를 인지 및 이해하고 복잡한 행동을 수행하는 인공지능을 가리킨다.",
        source: "네이버 국어사전"
      },
      sections: [
        {
          title: "핑퐁로봇",
          items: [
            {
              name: "핑퐁로봇 주제별 수업자료",
              url: "https://drive.google.com/drive/folders/1hpdJ5NCL0WVLSj94FqcckM0or7BTaDta",
              tag: "Google Drive",
              desc: "주제별로 정리된 핑퐁로봇 수업 자료",
              detail: "수업 주제에 맞춰 바로 활용할 수 있는 활동지와 수업 자료를 주제별 폴더로 정리했습니다."
            },
            {
              name: "핑퐁로봇 교재 공개 자료",
              url: "https://drive.google.com/drive/folders/1QRhTFDl5dQx0HWlnHmzctBCz_HdXFGXj",
              tag: "Google Drive",
              desc: "공개된 핑퐁로봇 교재 파일",
              detail: "차시별 교재와 예제 자료를 내려받아 수업 계획에 참고할 수 있습니다."
            },
            {
              name: "그 외 통합공개자료",
              url: "https://drive.google.com/drive/folders/1So8c_VPsEa6EY2t9ka4xKTiFUtYuoU56",
              tag: "Google Drive",
              desc: "핑퐁로봇 관련 기타 공개 자료 모음",
              detail: "위 분류에 속하지 않는 각종 참고 자료와 추가 공개 자료를 모아 두었습니다."
            },
            {
              name: "로보라이즌 (핑퐁로봇 공식)",
              url: "https://www.roborisen.com/",
              desc: "핑퐁로봇 제조사 공식 사이트",
              detail: "핑퐁로봇 제품 정보와 전용 앱, 펌웨어, 공식 교육 자료와 소식을 확인할 수 있습니다."
            }
          ]
        },
        {
          title: "레고 스파이크",
          items: [
            {
              name: "레고 에듀케이션",
              url: "https://education.lego.com/ko-kr/",
              desc: "레고 스파이크 프라임·에센셜 공식 교육 사이트",
              detail: "레고 블록과 모터·센서로 로봇을 만들고 블록/파이썬 코딩으로 제어하는 STEAM 수업 자료와 수업 계획안을 제공합니다."
            },
            {
              name: "LEGO SPIKE 웹앱",
              url: "https://spike.legoeducation.com/",
              desc: "설치 없이 브라우저에서 쓰는 레고 스파이크 코딩 앱",
              detail: "크롬 브라우저에서 스파이크 허브를 연결해 블록·파이썬 코딩을 바로 할 수 있어, 학교 기기에 프로그램을 설치하기 어려울 때 유용합니다."
            }
          ]
        },
        {
          title: "마이크로비트",
          items: [
            {
              name: "micro:bit 공식 사이트",
              url: "https://microbit.org/ko/",
              desc: "마이크로비트 교육재단 공식 사이트 (한국어)",
              detail: "LED·버튼·센서가 내장된 손바닥 크기의 교육용 보드 마이크로비트의 시작 가이드, 수업 아이디어, 프로젝트 예제를 제공합니다."
            },
            {
              name: "MakeCode for micro:bit",
              url: "https://makecode.microbit.org/",
              desc: "마이크로비트용 블록·자바스크립트·파이썬 코딩 에디터",
              detail: "웹 브라우저에서 블록 코딩으로 프로그램을 만들고, 가상 시뮬레이터로 확인한 뒤 마이크로비트에 바로 내려받을 수 있습니다."
            },
            {
              name: "micro:bit classroom",
              url: "https://classroom.microbit.org/",
              desc: "학급 단위로 마이크로비트 코딩 수업을 운영하는 도구",
              detail: "교사가 활동을 만들어 학생들에게 코드를 나눠 주고, 학생들이 작성한 코드를 모아 확인하며 수업을 진행할 수 있습니다."
            }
          ]
        },
        {
          title: "햄스터",
          items: [
            {
              name: "로보메이션 (햄스터 로봇)",
              url: "https://robomation.net/",
              desc: "햄스터 S·라쿤봇 등 교육용 로봇 제조사 공식 사이트",
              detail: "코딩 교육용 로봇 ‘햄스터 S’의 소프트웨어, 교육 자료, 활용 영상을 확인할 수 있습니다. 엔트리·스크래치와 연동해 수업할 수 있습니다."
            }
          ]
        },
        {
          title: "아두이노",
          items: [
            {
              name: "아두이노 공식",
              url: "https://www.arduino.cc/",
              desc: "센서·모터를 연결해 만드는 피지컬 컴퓨팅 보드 공식 사이트",
              detail: "아두이노 보드와 개발 프로그램(IDE), 예제 프로젝트를 제공합니다. 고학년 이상의 심화 피지컬 컴퓨팅 수업에 활용할 수 있습니다."
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 코딩 관련 사이트 ───────────────────────── */
    {
      id: "coding",
      title: "코딩 관련 사이트",
      icon: "💻",
      summary: "블록 코딩부터 피지컬 AI·데이터 과학 플랫폼까지",
      sections: [
        {
          title: "코딩 플랫폼",
          items: [
            {
              name: "엔트리",
              url: "https://playentry.org/",
              desc: "국내 대표 블록 코딩 교육 플랫폼",
              detail: "블록을 조립해 게임·애니메이션을 만들고, 인공지능 블록과 하드웨어(로봇) 연결까지 지원해 초등 SW·AI 수업에 널리 쓰입니다."
            },
            {
              name: "AI 이거다",
              url: "https://xn--ai-411if7s7w1a.com/",
              desc: "피지컬 AI · 데이터 과학 올인원 교육 플랫폼",
              detail: "그룹(학급) 관리, 가이드북과 튜토리얼을 제공해 AI·데이터 과학 수업을 한곳에서 운영할 수 있습니다."
            },
            {
              name: "코드AI (Code.org)",
              url: "https://code.org",
              desc: "전 세계 학생을 위한 무료 컴퓨터 과학·AI 교육 사이트",
              detail: "‘Hour of Code’ 활동과 학년별 코딩 코스, AI 교육 프로그램을 한국어로 제공합니다."
            },
            {
              name: "스크래치",
              url: "https://scratch.mit.edu/",
              desc: "MIT가 만든 세계 대표 블록 코딩 플랫폼",
              detail: "블록을 조립해 이야기·게임·애니메이션을 만들고, 전 세계 친구들과 작품을 공유하고 리믹스할 수 있습니다."
            },
            {
              name: "소프트웨어야 놀자",
              url: "https://www.playsw.or.kr/",
              desc: "네이버 커넥트재단의 SW·AI 교육 사이트",
              detail: "엔트리 기반 수업 자료, 교재, AI 체험 콘텐츠를 무료로 제공해 초등 SW·AI 수업 준비에 활용할 수 있습니다."
            },
            {
              name: "코드컴뱃",
              url: "https://codecombat.com/",
              tag: "영어",
              desc: "게임을 하며 파이썬·자바스크립트를 배우는 코딩 게임",
              detail: "캐릭터를 움직이는 코드를 직접 입력하며 던전을 탐험해, 텍스트 코딩에 자연스럽게 입문할 수 있습니다."
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 학습 데이터 분석 및 해석 방법 ───────────────────────── */
    {
      id: "data",
      title: "학습 데이터 분석 및 해석 방법",
      icon: "📊",
      summary: "공공·교육 데이터 수집과 분석, 학생 성장 성찰 도구",
      sections: [
        {
          title: "데이터 수집 및 분석 도구",
          items: [
            {
              name: "교육데이터플랫폼",
              url: "https://www.edmgr.kr/",
              desc: "교육부·한국교육학술정보원(KERIS)의 교육 데이터 플랫폼",
              detail: "교육 분야 공공데이터를 검색·개방하고 분석 시각화 자료를 제공합니다. 학생 수 추이, 희망 진로 순위 등을 확인할 수 있습니다."
            },
            {
              name: "공공데이터포털",
              url: "https://www.data.go.kr/index.do",
              desc: "정부가 개방한 공공데이터를 한곳에 모은 국가 포털",
              detail: "교통, 환경, 인구 등 다양한 분야의 데이터를 파일이나 API로 내려받아 데이터 분석 수업에 활용할 수 있습니다."
            },
            {
              name: "KOSIS 국가통계포털",
              url: "https://kosis.kr/index/index.do",
              desc: "통계청이 운영하는 국가 공식 통계 포털",
              detail: "인구, 경제, 사회 등 국내외 주요 통계를 표와 그래프로 조회하고 내려받을 수 있습니다."
            },
            {
              name: "KOSIS 통계놀이터",
              url: "https://kosis.kr/edu/index/index.do?sso=ok",
              desc: "학생 눈높이에 맞춘 통계 교육 사이트",
              detail: "통계 개념 학습, 그래프 만들기, 통계 퀴즈 등으로 통계를 쉽고 재미있게 익힐 수 있습니다."
            },
            {
              name: "네이버 데이터랩",
              url: "https://datalab.naver.com/",
              desc: "네이버 검색어 트렌드·쇼핑 인사이트 분석 서비스",
              detail: "검색어의 시기별 관심도 변화를 그래프로 비교해, 우리 생활 속 데이터를 탐색하는 수업에 활용하기 좋습니다."
            },
            {
              name: "구글 트렌드",
              url: "https://trends.google.co.kr/trends/",
              desc: "구글 검색어의 관심도 변화를 보여주는 분석 도구",
              detail: "지역·기간별 검색 관심도를 비교하고 관련 검색어를 확인할 수 있어, 사회 현상과 데이터를 연결해 볼 수 있습니다."
            },
            {
              name: "통그라미",
              url: "https://tong.mods.go.kr/front/main/main.do",
              desc: "통계청의 학교 통계교육용 데이터 분석 프로그램",
              detail: "엑셀처럼 데이터를 입력하고 표·그래프로 쉽게 분석·시각화할 수 있어 학생들의 통계 프로젝트 활동에 적합합니다."
            },
            {
              name: "빅카인즈",
              url: "https://www.bigkinds.or.kr/",
              desc: "한국언론진흥재단의 뉴스 빅데이터 분석 서비스",
              detail: "수십 년치 뉴스 기사를 검색하고 키워드 트렌드, 관계도, 연관어 분석을 시각화해 볼 수 있습니다."
            },
            {
              name: "캐글(Kaggle)",
              url: "https://www.kaggle.com/",
              desc: "세계 최대의 데이터 과학 커뮤니티 플랫폼",
              detail: "다양한 공개 데이터셋과 분석 노트북, 머신러닝 대회를 제공해 심화 데이터 분석 학습에 활용할 수 있습니다."
            }
          ]
        },
        {
          title: "데이터 분석 및 시각화 실습",
          items: [
            {
              name: "비바 예시",
              url: "https://vivaclass.vivasam.com/member/login/student?invCode=63",
              desc: "비상교육 비바클래스 데이터 분석 실습 예시",
              detail: "학생 초대 코드로 바로 접속해 비바클래스에서 데이터를 정리하고 시각화하는 활동을 체험해 볼 수 있습니다."
            }
          ]
        },
        {
          title: "종합적 성장 지원을 위한 성찰",
          items: [
            {
              name: "이모지 키친",
              url: "https://emojikitchen.dev/",
              desc: "두 이모지를 섞어 새로운 이모지를 만드는 사이트",
              detail: "오늘의 기분을 이모지 두 개로 조합해 표현해 보며, 학생들이 자신의 감정을 재미있게 돌아보는 성찰 활동에 활용합니다."
            },
            {
              name: "사회 정서 역량 검사",
              url: "https://www.basics.go.kr/bgportal/pa/psincm/psyinppr-list?authenticate=true",
              desc: "교육부 기초학력 지원 포털(꾸꾸)의 사회정서 검사",
              detail: "학생의 자기 인식, 관계 기술 등 사회정서 역량을 진단하고 결과를 바탕으로 지원 방향을 계획할 수 있습니다."
            },
            {
              name: "우리 반 관계 읽기",
              url: "https://www.basics.go.kr/bgportal/pa/psincm/psyinppr-list?authenticate=true",
              desc: "학급 내 교우 관계를 살펴보는 진단 도구",
              detail: "기초학력 지원 포털의 심리·정서 검사 목록에서 학급 구성원 간의 관계를 파악하는 검사를 실시할 수 있습니다."
            },
            {
              name: "라포라포",
              url: "https://www.raporapo.com/",
              desc: "학생 마음 기록과 교사-학생 소통을 돕는 플랫폼",
              detail: "학생들의 감정 기록과 상담 활동을 통해 교사가 학급 분위기와 학생의 마음 상태를 살필 수 있습니다."
            },
            {
              name: "심스페이스 마음일기",
              url: "https://diary.seamspace.me/login?redirect=/diary",
              desc: "AI가 분석하는 학생 감정 일기",
              detail: "학생이 쓴 마음일기를 AI가 분석해 감정 상태를 분류하고, 교사에게 학급 정서 상태와 위기 신호를 대시보드로 알려줍니다."
            },
            {
              name: "마이크로소프트 리플렉트",
              url: "https://reflect.microsoft.com/ko",
              desc: "감정 체크인과 성찰 질문을 위한 마이크로소프트 도구",
              detail: "귀여운 감정 몬스터로 오늘의 기분을 표현하는 체크인을 만들고, 학급 전체의 감정 흐름을 확인할 수 있습니다."
            }
          ]
        }
      ]
    }
  ]
};
