type Experience = {
  company: string;
  role: string;
  period: string;
  description?: string;
};

const educationAndExperience = {
  education: [
    { school: "동양미래대학교", degree: "컴퓨터소프트웨어 공학과", period: "2018.03 - 2021.02" },
    { school: "학점은행제", degree: "컴퓨터공학", period: "2019.03 - 2021.02" },
    { school: "엘리스트랙", degree: "React 부트캠프", period: "2024.09 - 2025.03" }
  ],
  experience: [
    {
      company: "엑스엘게임즈",
      role: "QA 엔지니어",
      period: "2020.12 - 2023.06",
      description: "1️⃣ 게임 품질 향상을 위한 기능 및 성능 테스트 진행 \n 2️⃣ 사용자 경험(UX) 개선을 위한 로그 분석 및 밸런스 시나리오 작성"
    },
    {
      company: "큐오피스",
      role: "QA 엔지니어",
      period: "2023.06 - 2024.08",
      description: "1️⃣ 사용자 인증(로그인, 계정 관리 등) 기능 검증 및 보안성 테스트 수행 \n 2️⃣ 테스트 케이스 및 시나리오 설계, 결함 분석 및 품질 개선 활동 수행"
    }
  ]
};

export default educationAndExperience;
export type { Experience} ;