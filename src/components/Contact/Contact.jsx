import React from "react";
import "./Contact.modules.css";

export const Contact = () => {
  return (
    <div>
      <p>You want to contact me ? 🤔</p>
      <p>
        You can call me at <span className="contact">0786660143</span> email me
        at <span className="contact">maxime.leberre31@gmail.com</span>.
      </p>
      <p>
        You can also join my network on{" "}
        <a href={"https://www.linkedin.com/in/maximeleberre/"} className="link">
          LinkedIn
        </a>
        . See you soon 👋🏼
      </p>
    </div>
  );
};
