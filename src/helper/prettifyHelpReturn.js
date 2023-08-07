export const prettifyHelpReturn = (commands) => {
    return [
        `${Object.keys(commands.commands).filter(cmd => commands.commands[cmd].hidden !== true).map(cmd => `${cmd} | ${commands.commands[cmd].description} | ${commands.commands[cmd].usage}`).join("\n")}`,
        `${Object.keys(commands.overwrites).filter(cmd => commands.overwrites[cmd].hidden !== true).map(cmd => `${cmd} | ${commands.overwrites[cmd].description} | ${commands.overwrites[cmd].usage}`).join("\n")}`
    ].join("\n")
}