import {calculateAge} from "../../helper/calculateAge.js";

export const customCommands = {
    commands: {
        about: {
            description: "get a summary about me",
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
        hiddenCommand: {
            fn: () => {
                return 'GG à toi bg'
            },
            hidden: true
        },
        projects: {
            description: 'See all my projects',
            fn: () => {
                return ["Webp Converter", "France Challenges"]
            },
            hidden: false
        },
    },
    overwrites: {
        help: {
            description: 'help',
            usage: 'help',
        },
        clear: {
            description: 'clear',
            usage: 'clear'
        }
    }
};