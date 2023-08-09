import {WelcomeMessage} from "../WelcomeMessage/WelcomeMessage.jsx";
import {prettifyHelpReturn} from "../../helper/prettifyHelpReturn.js";
import {customCommands} from "../../domain/commands/index.js";
import {createRef} from "react";
import Terminal  from "react-console-emulator";
import "./MyTerminal.modules.css"


export const MyTerminal = () => {
    const terminal = createRef();

    const commands = {
        clear: {
            description: 'Clear the terminal',
            usage: 'clear',
            fn: () => {
                terminal.current.clearStdout()
            },
            hidden: false
        },
        help: {
            fn: () => {
                return prettifyHelpReturn(customCommands)
            }
        },
        ...customCommands.commands
    }

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
    )
}