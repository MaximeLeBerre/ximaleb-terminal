import {calculateAge} from "../../helper/calculateAge.js";

export const customCommands = {
    commands: {
        about: {
            description: "get a summary about me",
            usage: 'about',
            fn: () => {
                return [
                    "Hey, my name is Max 👋🏼",
                    `I'm ${calculateAge()} years old.`,
                    "I'm currently Full Stack developer at France Challenges",
                    "To discover more about me, type resume command"
                ].join("\n");
            },
            hidden: false
        },
        hello: {
            fn: () => {
                return "Hey, welcome on this guessing game. Congrats, You find the first command."
            },
            hidden: true
        },
        projects: {
            description: 'See all my projects',
            usage: 'projects',
            fn: () => {
                return ["webp-converter", "france-challenges"].join("\n")
            },
            hidden: false
        },
        goTo: {
            description: 'Open project',
            usage: 'goTo <project-name>',
            args: ['france-challenges', 'webp-converter'],
            fn: (args) => {
                if(args === 'webp-converter') {
                     window.open("https://github.com/MaximeLeBerre/webp-converter", "_blank")
                    return 'Project opened (https://github.com/MaximeLeBerre/webp-converter)'
                }
                if(args === 'france-challenges') {
                    window.open("https://france-challenges.com", "_blank")
                    return 'Project opened (https://france-challenges.com)'
                }
                return 'invalid params'
            }
        },
        github: {
            description: 'Open my github profile',
            usage: 'github',
            fn: () => {
                window.open("https://github.com/MaximeLeBerre", "_blank")
            }
        }
    },
    overwrites: {
        help: {
            description: 'see all commands (ou presque 🤔)',
            usage: 'help',
        },
        clear: {
            description: 'Nettoyer le terminal',
            usage: 'clear'
        }
    }
};