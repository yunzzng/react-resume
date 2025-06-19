interface Portfolio {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  contribution: "Team project" | "Personal project";
  dataset: string[];
  analysis: string[];
  insight: string[];
  output: string;
  image: string; 
}

const portfolios = [
  // {
  //   title: "Haidilao",
  //   description: "MZ세대에서 유명한 중국의 훠궈로 유명한 하이디라오의 페이지 리뉴얼",
  //   date: "2024",
  //   link: "https://leeyunseul.notion.site/1a023f8c54e68177a1aceb0fe2cdb199?pvs=4"
  // },
  // {
  //   title: "miniGOLD",
  //   description: "주얼리 트렌드를 선도하고 새롭게 변화시키는 미니골드의 페이지 리뉴얼",
  //   date: "2024",
  //   link: "https://leeyunseul.notion.site/1a023f8c54e681c6a1f2cd93850a9cba?pvs=4"
  // },
  // {
  //   title: "JYP",
  //   description: "대형 엔터테인먼트 중 하나로 아티스트들을 소개하는 페이지 리뉴얼",
  //   date: "2024",
  //   link: "https://leeyunseul.notion.site/JYP-1a023f8c54e680eebff5ed1daeac1e25?pvs=4"
  // },
  {
    title: "React UI kit (yunseul-ui-elements)",
    subtitle: "React를 기반으로 한 UI 컴포넌트 라이브러리",
    description: "yunseul-ui-elements는 React 기반의 UI 컴포넌트 라이브러리로 재사용 가능한 디자인 시스템을 구축하고 보다 일관된 UI 스타일을 제공하기 위해 개발하였습니다. 이를 통해 프론트엔드 개발 시 효율적인 UI 구성을 목표로 하고 있습니다. ",
    date: "2024-12-20",
    contribution: "개인 프로젝트",
    dataset: [
      "컴포넌트 기반 아키텍처: 각 UI 요소를 독립적인 컴포넌트로 구성하여 재사용성과 유지보수성을 극대화",
      "확장 가능성: 프로젝트에 맞게 커스터마이징이 가능하도록 설계"
    ],
    analysis: [
      "컴포넌트 기반 UI 개발을 통해 코드 재사용성 증가"
    ],
    insight: [
      "컴포넌트 설계의 중요성: 재사용성과 확장성을 고려한 설계가 유지보수성을 높임"
    ],
    output: "https://www.npmjs.com/package/yunseul-ui-elements" ,
    image: "/img/ui-kit.png" 
  },
  // {
  //   title: "E-Office",
  //   description: "업무지원 플랫폼(회의실 CRUD)",
  //   date: "2025",
  //   link: "https://leeyunseul.notion.site/E-Office-1a023f8c54e68025b8f7ddd09fc5bb34?pvs=4"
  // },
  // {
  //   title: "FansPick",
  //   description: "굿즈 주문관리 웹서비스 (CRUD)",
  //   date: "2025",
  //   link: "https://leeyunseul.notion.site/FansPick-1a023f8c54e6809eaf6cd5561e2dce43?pvs=4"
  // },
  {
    title: "PETPLE",
    subtitle: "반려동물 공공 데이터를 활용한 웹 플랫폼",
    description: "Petple(펫플)은 반려인을 위한 종합 서비스로, 반려동물과 함께하는 삶을 더욱 편리하고 즐겁게 만들어주는 웹 서비스입니다. 사용자에게 유용한 정보를 제공하고, 편리한 기능을 통해 반려동물과의 생활을 지원하는 것이 본 프로젝트의 목표입니다. 직관적인 UI/UX를 제공하고, 다양한 기능을 통합하여 사용자 경험을 극대화하는 데 중점을 두었습니다.",
    date: "2025-02-11 ~ 2025-03-05",
    contribution: "팀 프로젝트(프론트:70%, 백엔드:30%)",
    dataset: [
      "반려동물 관련 공공 데이터 API를 활용한 위치 정보 제공 (동물병원, 약국, 장묘업체, 반려동물 동반 가능 시설 등)",
      "Geolocation API를 이용한 산책 기록 기능 구현",
      "펫 이름 랜덤 추천을 위한 데이터셋 활용",
      "집밥 원료 성분 데이터베이스 구축 및 제공",
      "카카오 맵 API를 활용한 위치 기반 서비스 및 지도 시각화",
      "카카오 로컬 API를 활용한 좌표 변환 및 주소-좌표 변환(Coordinates Transformation) 기능 적용"
    ],
    analysis: [
      "공공 데이터 API를 자주 호출하지 않고, React Query(useQuery)를 사용하여 캐싱 및 성능 최적화",
      "Geolocation API를 이용한 산책 기록 이용 시 위치 가져오기를 사용하여 권한 요청 필요",
      "OAuth 로그인(구글, 카카오, 네이버) 적용 후 사용자 연령대 분석을 통한 맞춤형 서비스 제공 방식 연구"
    ],
    insight: [
      "공공 API 및 위치 기반 서비스 활용 경험을 통해 다양한 데이터를 효율적으로 다루는 방법을 학습함",
      "Geolocation API를 활용한 실시간 데이터 처리 및 시각화 경험을 쌓음",
      "커뮤니티 무한 스크롤 기능 구현을 통해 성능 최적화 및 사용자 경험 개선 방법을 익힘"
    ],
    output: "https://petple-front.vercel.app/" ,
    image: "/img/petple.png" 
  },
  // {
  //   title: "Vite-ci",
  //   description: "Docker와 GitLab CI/CD를 활용하여 자동 빌드 및 배포 환경 구축",
  //   date: "2025",
  //   link: "https://leeyunseul.notion.site/vite-ci-1a023f8c54e680c5a2d7dcd9d6b6a7e2?pvs=4"
  // },
  // {
  //   title: "Viteful",
  //   description: "React를 기반으로 한 UI 컴포넌트 라이브러리",
  //   date: "2025",
  //   link: "https://leeyunseul.notion.site/Viteful-1a023f8c54e680c4a0d1ea4cc0a333a5?pvs=4"
  // },
  {
    title:  "vite-plugin-optimize-image",
    subtitle: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
    description: "이미지 최적화는 페이지 로딩 속도를 개선하는 핵심 요소 중 하나입니다. 본 프로젝트는 Vite 환경에서 이미지 최적화를 자동으로 수행하는 플러그인(vite-plugin-optimize-image)을 개발하는 것을 목표로 하였습니다. 별도의 이미지 최적화 작업을 하지 않아도 자동으로 최적화된 이미지를 제공할 수 있도록 합니다.",
    date: "2025-02-05",
    contribution: "개인 프로젝트",
    dataset: [
      "PNG, JPEG, JPG 이미지 형식 파일을 Webp로 자동 변환하는 기능"
    ],
    analysis: [
      "웹사이트 로딩 속도개선: 이미지 크기 최적화를 통해 초기 페이지 로딩 속도가 빨라짐"
    ],
    insight: [
      "Vite 플러그인 개발 경험: 추가적인 설정 없이 플러그인 설치만으로 최적화 기능 사용 가능"
    ],
    output: "https://www.npmjs.com/package/vite-plugin-optimize-image" ,
    image: "/img/plugin.png" 
  },
];

export default portfolios;
export type { Portfolio };