import {createRef} from 'react';
import Terminal from "react-console-emulator";
import './App.css'
import {customCommands} from "./domain/commands/index.js";
import {prettifyHelpReturn} from "./helper/prettifyHelpReturn.js";
import {WelcomeMessage} from "./components/WelcomeMessage/WelcomeMessage.jsx";
import {Loading} from "./layouts/Loading/Loading.jsx";

const App = () => {
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
        <div>
            <Loading />
            <Terminal
                className="terminal"
                ref={terminal}
                commands={commands}
                welcomeMessage={<WelcomeMessage />}
                promptLabel={">"}
                contentStyle={{ color: '#C35E00' , fontWeight: 'normal', paddingLeft: null}}
                promptLabelStyle={{ color: '#FFAA5B' , fontWeight:'normal'}}
                inputTextStyle={{ color: '#FFAA5B' , fontWeight: 'normal'}}
                messageStyle={{ color: '#BCBCBE' , fontWeight: 'normal', paddingLeft: null}}
                scrollBehavior="auto"
                noDefaults
                dangerMode={true}
            />
        </div>
    );
};

export default App
