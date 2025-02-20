interface Portfolio {
  title: string;
  description: string;
  date: string;
}

const portfolios = [
  {
    title: "Haidilao",
    description: "MZ세대에서 유명한 중국의 훠궈로 유명한 하이디라오의 페이지 리뉴얼",
    date: "2024",
  },
  {
    title: "miniGOLD",
    description: "주얼리 트렌드를 선도하고 새롭게 변화시키는 미니골드의 페이지 리뉴얼",
    date: "2024",
  },
  {
    title: "JYP",
    description: "대형 엔터테인먼트 중 하나로 아티스트들을 소개하는 페이지 리뉴얼",
    date: "2024",
  },
  {
    title: "React UI kit (yunseul-ui-elements)",
    description: "React를 기반으로 한 UI 컴포넌트 라이브러리",
    date: "2024",
  },
  {
    title: "E-Office",
    description: "업무지원 플랫폼(회의실 CRUD)",
    date: "2025",
  },
  {
    title: "FansPick",
    description: "굿즈 주문관리 웹서비스 (CRUD)",
    date: "2025",
  },
  {
    title: "PETPLE",
    description: "반려동물 공공 데이터를 활용한 웹 플랫폼",
    date: "2025",
  },
  {
    title: "Viteful",
    description: "React를 기반으로 한 UI 컴포넌트 라이브러리",
    date: "2025",
  },
  {
    title: "vite-plugin-optimize-image",
    description: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
    date: "2025",
  },
];

export default portfolios;
export type { Portfolio };