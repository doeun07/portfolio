import React from "react";
import "../styles/project.css";
import profileImage from "../img/profile.jpg"; // 테스트용 이미지

const projects = [
  {
    id: 1,
    title: "포폴 제작",
    description: [
      "React, JS, HTML, CSS로 제작 중인 개인 포트폴리오 웹사이트입니다.",
    ],
    summary: "React를 이용한 포트폴리오 사이트 제작 프로젝트.",
    startDate: "2025-03-05",
    endDate: "진행중",
    technologies: ["React", "JS", "HTML", "CSS"],
    imageUrl: profileImage,
    projectStatus: "진행 중",
    projectType: "개인프로젝트",
    link: "https://github.com/doeun07/portfolio",
    improvements: [
      "반응형 웹 디자인을 적용해 다양한 화면에서 잘 보이도록 개선할 수 있다.",
      "SEO 최적화와 성능 최적화를 추가할 수 있다.",
    ],
  },
  {
    id: 2,
    title: "2025 지방문제",
    description: [
      "HTML, CSS, JS, PHP, MySQL, jQuery, Bootstrap을 활용한 프로젝트입니다.",
      "2025년 지방문제에 대한 웹 애플리케이션입니다.",
    ],
    summary: "2025년 지방문제 웹 애플리케이션 프로젝트.",
    startDate: "2025-03-07",
    endDate: "진행중",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL", "jQuery", "Bootstrap"],
    imageUrl: profileImage,
    projectStatus: "진행 중",
    projectType: "개인프로젝트",
    link: "https://github.com/doeun07/2025BusanSkills",
    improvements: [
      "서버 사이드 렌더링(SSR)을 고려하여 성능을 최적화할 수 있다.",
      "사용자 경험을 향상시킬 수 있는 기능 추가가 가능하다.",
    ],
  },
  {
    id: 3,
    title: "2024 전국문제",
    description: [
      "HTML, CSS, JS, PHP, MySQL, jQuery, Bootstrap을 활용한 프로젝트입니다.",
      "2024년 전국문제에 대한 웹 애플리케이션입니다.",
    ],
    summary: "2024년 전국문제 웹 애플리케이션 프로젝트.",
    startDate: "2024-02-17",
    endDate: "진행중",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL", "jQuery", "Bootstrap"],
    imageUrl: profileImage,
    projectStatus: "진행 중",
    projectType: "개인프로젝트",
    link: "https://github.com/doeun07/2024NationwideSkills",
    improvements: [
      "UX/UI 개선을 위해 다크 모드 기능을 추가할 수 있다.",
      "알림 기능을 추가하여 사용자의 편의를 도울 수 있다.",
    ],
  },
  {
    id: 4,
    title: "2024 지방문제",
    description: [
      "HTML, CSS, JS, PHP, MySQL, jQuery, Bootstrap을 활용한 프로젝트입니다.",
      "2024년 지방문제에 대한 웹 애플리케이션입니다.",
    ],
    summary: "2024년 지방문제 웹 애플리케이션 프로젝트.",
    startDate: "2024-03-04",
    endDate: "2024-03-29",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL", "jQuery", "Bootstrap"],
    imageUrl: profileImage,
    projectStatus: "완료",
    projectType: "개인프로젝트",
    link: "https://github.com/doeun07/2024LocalSkillsBaseBall",
    improvements: [
      "반응형 디자인 최적화 및 모듈화된 코드 구조 개선.",
      "자동화된 테스트 도입을 통해 코드 품질 향상.",
    ],
  },
  {
    id: 5,
    title: "학교 마스코드 소개 웹사이트",
    description: [
      "HTML, CSS로 제작된 학교 마스코드를 소개하는 웹사이트입니다.",
    ],
    summary: "학교 마스코드를 소개하는 웹사이트 제작 프로젝트.",
    startDate: "2024-12-13",
    endDate: "2024-12-16",
    technologies: ["HTML", "CSS"],
    imageUrl: profileImage,
    projectStatus: "완료",
    projectType: "개인프로젝트",
    link: "https://github.com/doeun07/schoolMascotSelection",
    improvements: [
      "웹사이트 디자인을 개선하여 사용자 경험을 향상시킬 수 있다.",
      "다국어 지원을 통해 더 많은 사용자에게 접근할 수 있다.",
    ],
  },
  {
    id: 6,
    title: "직박 OX 퀴즈",
    description: [
      "HTML, CSS, JS, jQuery를 활용하여 만든 OX 퀴즈 웹 애플리케이션입니다.",
    ],
    summary: "OX 퀴즈를 즐길 수 있는 웹 애플리케이션 프로젝트.",
    startDate: "2024-01-01",
    endDate: "진행중",
    technologies: ["HTML", "CSS", "JS", "jQuery"],
    imageUrl: profileImage,
    projectStatus: "완료",
    projectType: "개인프로젝트",
    link: "https://github.com/doeun07/2024_oxQuiz",
    improvements: [
      "UI를 개선하고, 퀴즈 질문을 다양화하여 재미를 더할 수 있다.",
      "퀴즈 기록을 저장하여 사용자 맞춤형 추천 기능을 추가할 수 있다.",
    ],
  },
  {
    id: 7,
    title: "Algo-nix",
    description: [
      "React, JS, TS로 만든 Algo-nix 프론트엔드 프로젝트입니다.",
    ],
    summary: "Algo-nix 프론트엔드 프로젝트.",
    startDate: "2024-10-??",
    endDate: "진행중",
    technologies: ["React", "JS", "TS"],
    imageUrl: profileImage,
    projectStatus: "진행 중",
    projectType: "개인프로젝트",
    link: "https://github.com/Algo-nix/Algonix-FrontEnd",
    improvements: [
      "타입스크립트를 활용한 타입 안정성을 높일 수 있다.",
      "기능을 추가하여 사용자 편의성을 개선할 수 있다.",
    ],
  },
];

const Project = () => {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
          <div className="project-box">
            <span className="project-title">{project.title}</span>
            {project.projectStatus === "완료" ? (
              <span className="project-status-end">
                {project.projectStatus}
              </span>
            ) : (
              <span className="project-status-ing">
                {project.projectStatus}
              </span>
            )}
          </div>
          <p className="project-summary">{project.summary}</p>
          <p className="project-dates">
            {project.startDate} ~ {project.endDate}
          </p>

          <h4>주요 기능 및 특징 :</h4>
          <ul className="project-description">
            {project.description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <h4>아쉬운 점 및 개선할 점 :</h4>
          <ul className="project-description">
            {project.improvements.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <p className="project-technologies">
            {project.technologies.join(", ")}
          </p>
          <div className="project-link">
            <p>LINK :</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
