import React from "react";
import { welcomeMessage } from "../../helper/welcomeMessage.js";
import "./WelcomeMessage.modules.css";

export const WelcomeMessage = () => {
  return (
    <div className="asciWrapper">
      {welcomeMessage.map((line, index) => (
        <p className="asciText" key={index}>
          {line.replace(/ /g, "\u00A0")}
        </p>
      ))}
      <p>
        Welcome to Ximaleb Terminal. Type <code className="code">help</code> to
        see available commands.
      </p>
    </div>
  );
};
