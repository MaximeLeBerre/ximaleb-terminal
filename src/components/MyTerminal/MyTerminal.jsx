import React, { createRef } from "react";
import { WelcomeMessage } from "../WelcomeMessage/WelcomeMessage.jsx";
import { customCommands } from "../../domain/commands/index.jsx";
import Terminal from "react-console-emulator";
import "./MyTerminal.modules.css";
import { Help } from "../Help/Help.jsx";

export const MyTerminal = () => {
  const terminal = createRef();

  const commands = {
    clear: {
      description: "Clear the terminal",
      usage: "clear",
      fn: () => {
        terminal.current.clearStdout();
        return <WelcomeMessage />;
      },
      hidden: false,
    },
    help: {
      fn: () => <Help />,
    },
    ...customCommands.commands,
  };

  return (
    <Terminal
      className="terminal"
      ref={terminal}
      commands={commands}
      welcomeMessage={<WelcomeMessage />}
      promptLabel={">"}
      contentClassName="contentStyle"
      promptLabelClassName="promptLabelStyle"
      inputClassName="inputTextStyle"
      messageClassName="messageStyle"
      scrollBehavior="auto"
      noDefaults
      dangerMode={true}
    />
  );
};
