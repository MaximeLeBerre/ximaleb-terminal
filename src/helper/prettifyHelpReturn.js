const headers = ["command", "description", "usage"];

export const prettifyHelpReturn = (commands) => {
  return [
    `${headers[0]}${`${"\u00A0"}`.repeat(12 - headers[0].length)} | ${
      headers[1]
    }${`${"\u00A0"}`.repeat(30 - headers[1].length)} | ${headers[2]}`,
    `${"-".repeat(70)}`,
    `${Object.keys(commands.commands)
      .filter((cmd) => commands.commands[cmd].hidden !== true)
      .map(
        (cmd) =>
          `${cmd}${`${"\u00A0"}`.repeat(12 - cmd.length)} | ${
            commands.commands[cmd].description
          }${`${"\u00A0"}`.repeat(
            30 - commands.commands[cmd].description.length,
          )} | ${commands.commands[cmd].usage}`,
      )
      .join("\n")}`,
    `${Object.keys(commands.overwrites)
      .filter((cmd) => commands.overwrites[cmd].hidden !== true)
      .map(
        (cmd) =>
          `${cmd}${`${"\u00A0"}`.repeat(12 - cmd.length)} | ${
            commands.overwrites[cmd].description
          }${`${"\u00A0"}`.repeat(
            30 - commands.overwrites[cmd].description.length,
          )} | ${commands.overwrites[cmd].usage}`,
      )
      .join("\n")}`,
  ].join("\n");
};
