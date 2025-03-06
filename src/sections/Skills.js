import React from "react";
import "../styles/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faPhp,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML", level: 90, iconLink: faHtml5 },
  { name: "CSS", level: 85, iconLink: faCss3Alt },
  { name: "JavaScript", level: 60, iconLink: faJs },
  { name: "React", level: 30, iconLink: faReact },
  { name: "Bootstrap", level: 50, iconLink: faBootstrap },
  { name: "PHP", level: 50, iconLink: faPhp },
  { name: "MySQL", level: 50, iconLink: faDatabase },
  { name: "Git", level: 40, iconLink: faGitAlt },
  { name: "GitHub", level: 70, iconLink: faGithub },
  { name: "Figma", level: 60, iconLink: faFigma },
];

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <p className="skill-name">
              <FontAwesomeIcon icon={skill.iconLink} /> {skill.name}
            </p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
