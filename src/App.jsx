import { createRef } from 'react';
import Terminal from "react-console-emulator";
import './App.css'
import {customCommands} from "./domain/commands/index.js";

const App = () => {
    const terminal = createRef();

    const commands = {
        clear: {
            description: 'Clears the terminal',
            usage: 'clear',
            fn: () => {
                terminal.current.clearStdout()
            },
            hidden: false
        },
        help: {
            fn: () => {
                return [
                    `${Object.keys(customCommands.commands).map(cmd => cmd).filter(cmd => customCommands.commands[cmd].hidden !== true).join("\n")}`,
                    `${Object.keys(customCommands.overwrites).map(cmd => cmd).filter(cmd => customCommands.overwrites[cmd].hidden !== true).join("\n")}`
                ].join("\n")
            }
        },
        ...customCommands.commands
    }

    return (
        <div>
            <Terminal
                className="terminal"
                ref={terminal}
                commands={commands}
                welcomeMessage={"Welcome to Ximaleb Terminal! Type 'help'."}
                promptLabel={">"}
                contentStyle={{ color: '#E6490B' , fontWeight: 'normal', paddingLeft: null}} // Text colour
                promptLabelStyle={{ color: '#151515' , fontWeight:'normal'}} // Prompt label colour
                inputTextStyle={{ color: '#151515' , fontWeight: 'normal'}}
                messageStyle={{ color: '#151515' , fontWeight: 'normal', paddingLeft: null}}
                scrollBehavior="auto"
                noDefaults
            />
        </div>
    );
};

export default App
