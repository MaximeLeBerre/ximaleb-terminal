import React from "react";
import { skills } from "../../domain/skills/index.js";
import "./Skills.modules.css";

export const Skills = () => {
  return (
    <div className="container">
      {skills.map((skill, index) => (
        <div key={index}>
          <p className="name">{skill.name}</p>
          <div className="skills-container">
            {skill.skills.map((sk, key) => (
              <p key={key}>- {sk}</p>
            ))}
          </div>
        </div>
      ))}
      <p>
        Thanks to these skills, I was able to create and contribute on a few
        projects, take a look and typing <span className="code">projects</span>{" "}
        👇🏼
      </p>
    </div>
  );
};
