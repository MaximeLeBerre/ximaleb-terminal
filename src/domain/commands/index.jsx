import React from "react";
import { About } from "../../components/About/About.jsx";
import { Resume } from "../../components/Resume/Resume.jsx";
import { Skills } from "../../components/Skills/Skills.jsx";
import { Projects } from "../../components/Projects/Projects.jsx";
import { Contact } from "../../components/Contact/Contact.jsx";

export const customCommands = {
  commands: {
    about: {
      description: "Get a summary about me",
      usage: "about",
      fn: () => <About />,
      hidden: false,
    },
    resume: {
      description: "Get my resume",
      usage: "resume",
      fn: () => <Resume />,
      hidden: false,
    },
    skills: {
      description: "Get my skills",
      usage: "skills",
      fn: () => <Skills />,
      hidden: false,
    },
    projects: {
      description: "See all my projects",
      usage: "projects",
      fn: () => <Projects />,
      hidden: false,
    },
    goTo: {
      description: "get information about project",
      usage: "goTo [project-name]",
      fn: (args) => {
        if (args === "webp-converter") {
          window.open(
            "https://github.com/MaximeLeBerre/webp-converter",
            "_blank",
          );
          return "Project opened (https://github.com/MaximeLeBerre/webp-converter)";
        }
        if (args === "france-challenges") {
          window.open("https://france-challenges.com", "_blank");
          return "Project opened (https://france-challenges.com)";
        }
        return "invalid params";
      },
    },
    github: {
      description: "Open my github profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/MaximeLeBerre", "_blank");
      },
    },
    contact: {
      description: "get my contact information",
      usage: "contact",
      fn: () => <Contact />,
      hidden: false,
    },
  },
  overwrites: {
    help: {
      description: "See all commands (almost 🤔)",
      usage: "help",
    },
    clear: {
      description: "Clear terminal",
      usage: "clear",
    },
  },
};
