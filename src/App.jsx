import { createRef } from 'react';
import Terminal from "react-console-emulator";

import './App.css'

const App = () => {
    console.log('render')
    const terminal = createRef();

    const commands = {
        hello: {
            description: "say Hello",
            fn: () => {
                return ["Welcome on my website ! ", "Have a nice day 👋🏼"].join("\n");
            }
        },
        projects: {
            description: 'See all my projects',
            fn: () => {
                return ['Webp Converter', 'France Challenges'].join("\n")
            }
        }
    };

    return (
        <div>
            <Terminal
                className="terminal"
                ref={terminal}
                commands={commands}
                welcomeMessage={"Welcome to Ximaleb Terminal! Type 'help'."}
                promptLabel={">"}
                contentStyle={{ color: '#ffb86c' , fontWeight: 'normal', paddingLeft: null}} // Text colour
                promptLabelStyle={{ color: '#ff5555' , fontWeight:'normal'}} // Prompt label colour
                inputTextStyle={{ color: '#f1fa8c' , fontWeight: 'normal'}}
                messageStyle={{ color: '#8be9fd' , fontWeight: 'normal', paddingLeft: null}}
                scrollBehavior="auto"
            />
        </div>
    );
};

export default App
