interface Portfolio {
  title: string;
  description: string;
  date: string;
  link: string;
}

const portfolios = [
  {
    title: "Haidilao",
    description: "MZ세대에서 유명한 중국의 훠궈로 유명한 하이디라오의 페이지 리뉴얼",
    date: "2024",
    link: "https://leeyunseul.notion.site/1a023f8c54e68177a1aceb0fe2cdb199?pvs=4"
  },
  {
    title: "miniGOLD",
    description: "주얼리 트렌드를 선도하고 새롭게 변화시키는 미니골드의 페이지 리뉴얼",
    date: "2024",
    link: "https://leeyunseul.notion.site/1a023f8c54e681c6a1f2cd93850a9cba?pvs=4"
  },
  {
    title: "JYP",
    description: "대형 엔터테인먼트 중 하나로 아티스트들을 소개하는 페이지 리뉴얼",
    date: "2024",
    link: "https://leeyunseul.notion.site/JYP-1a023f8c54e680eebff5ed1daeac1e25?pvs=4"
  },
  {
    title: "React UI kit (yunseul-ui-elements)",
    description: "React를 기반으로 한 UI 컴포넌트 라이브러리",
    date: "2024",
    link: "https://leeyunseul.notion.site/React-UI-kit-1a023f8c54e680b8b07fc80751649c72?pvs=4"
  },
  {
    title: "E-Office",
    description: "업무지원 플랫폼(회의실 CRUD)",
    date: "2025",
    link: "https://leeyunseul.notion.site/E-Office-1a023f8c54e68025b8f7ddd09fc5bb34?pvs=4"
  },
  {
    title: "FansPick",
    description: "굿즈 주문관리 웹서비스 (CRUD)",
    date: "2025",
    link: "https://leeyunseul.notion.site/FansPick-1a023f8c54e6809eaf6cd5561e2dce43?pvs=4"
  },
  {
    title: "PETPLE",
    description: "반려동물 공공 데이터를 활용한 웹 플랫폼",
    date: "2025",
    link: "https://leeyunseul.notion.site/PETPLE-1a023f8c54e680c5a927ffc917a9bc7b?pvs=4"
  },
  {
    title: "Vite-ci",
    description: "Docker와 GitLab CI/CD를 활용하여 자동 빌드 및 배포 환경 구축",
    date: "2025",
    link: "https://leeyunseul.notion.site/vite-ci-1a023f8c54e680c5a2d7dcd9d6b6a7e2?pvs=4"
  },
  {
    title: "Viteful",
    description: "React를 기반으로 한 UI 컴포넌트 라이브러리",
    date: "2025",
    link: "https://leeyunseul.notion.site/Viteful-1a023f8c54e680c4a0d1ea4cc0a333a5?pvs=4"
  },
  {
    title: "vite-plugin-optimize-image",
    description: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
    date: "2025",
    link: "https://leeyunseul.notion.site/vite-plugin-optimize-image-1a023f8c54e680619f47e40a9e004e9f?pvs=4"
  },
];

export default portfolios;
export type { Portfolio };