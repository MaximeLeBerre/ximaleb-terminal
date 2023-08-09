import React from "react";
import { calculateAge } from "../../helper/calculateAge.js";
import "./About.modules.css";

export const About = () => {
  return (
    <div>
      <p>Hey, my name is Max 👋🏼</p>
      <p className="no-margin">I'm {calculateAge()} years old.</p>
      <p className="no-margin">
        I'm currently Full Stack developer at France Challenges.
      </p>
      <p>
        To discover more about me, type <span className="code">resume</span> 👇🏼
      </p>
    </div>
  );
};
