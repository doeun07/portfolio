import React from "react";
import "../styles/project.css";
import profileImage from "../img/profile.jpg"; // 테스트용 이미지

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: [
      "This is a description of Project 1.",
      "It includes multiple lines.",
      "Each line is an array element.",
    ],
    summary: "A simple React project with multi-line descriptions.",
    startDate: "2024-01-01",
    endDate: "2024-03-01",
    technologies: ["React", "CSS", "JavaScript"],
    imageUrl: profileImage,
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: [
      "This is Project 2.",
      "It also has multiple lines of description.",
    ],
    summary: "HTML, CSS, and JavaScript used for a web app.",
    startDate: "2024-02-01",
    endDate: "진행 중",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: profileImage,
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: ["This is Project 3.", "React and Node.js are used."],
    summary: "A full-stack app built with React and Node.js.",
    startDate: "2024-03-01",
    endDate: "진행 중",
    technologies: ["React", "Node.js", "Express"],
    imageUrl: profileImage,
    link: "#",
  },
  {
    id: 4,
    title: "Project 4",
    description: [
      "Django-based project.",
      "This project is built with Python.",
    ],
    summary: "A web app using Python and Django.",
    startDate: "2024-01-01",
    endDate: "2024-05-01",
    technologies: ["Python", "Django"],
    imageUrl: profileImage,
    link: "#",
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
          <p className="project-title">{project.title}</p>
          <p className="project-summary">{project.summary}</p>

          <ul className="project-description">
            {project.description.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <p className="project-dates">
            {project.startDate} ~ {project.endDate}
          </p>
          <p className="project-technologies">
            {project.technologies.join(", ")}
          </p>
          <span className="project-link">
            PROJECT LINK :{" "}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Project;
