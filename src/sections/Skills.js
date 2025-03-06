import React from "react";
import "../styles/skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 60 },
  { name: "React", level: 30 },
  { name: "Bootstrap", level: 50 },
  { name: "PHP", level: 50 },
  { name: "MySQL", level: 50 },
  { name: "Git", level: 40 },
  { name: "GitHub", level: 70 },
  { name: "Figma", level: 60 },
];

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <p className="skill-name">{skill.name}</p>
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
