import {calculateAge} from "../../helper/calculateAge.js";

export const customCommands = {
    commands: {
        about: {
            description: "Get a summary about me",
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
        resume: {
            description: "Get my resume",
            usage: 'resume',
            fn: () => {
                return [
                    "Sept 2018 - July 2020 - Student in management (apprenticeship)",
                    "Sept 2020 - Feb 2021 - Web dev bootcamp (Wild Code School)",
                    "Mar 2021 - May 2021 - Web dev Internship (Melting K, France Challenges)",
                    "June 2021 - Aug 2022 - Apprenticeship at France Challenges",
                    "2022 - Occasional freelance jobs",
                    "Since Sept 2022 - Web dev fullstack at France Challenges on permanent contract"
                ].join("\n");
            }
        },
        skills: {
            description: 'Get my skills',
            usage: 'skills',
            fn: () => {
                return [
                    '-----',
                    'DESIGN 🎨','- figma','- ux/ui principles',
                    '-----',
                    'FRONT 🖥️', '- html/css', '- javascript', '- react', '- typescript', '- nextjs',
                    '-----',
                    'BACK ⚙️','- nodejs', '- graphql', '- rest','- express', '- strapi',
                    '-----',
                    'DB 📚', ' - MongoDB', '- mySql','- arrangoDB',
                    '-----',
                    'DEVOPS 🚀', '- github ci', '- docker', '- clevercloud'
                ].join("\n");
            }

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
        },
        toktoktok: {
            usage: 'toktoktok',
            description: '*************',
            fn: () => {
                return "Hey, welcome 👋🏼."
            },
            hidden: true
        },
    },
    overwrites: {
        help: {
            description: 'See all commands (almost 🤔)',
            usage: 'help',
        },
        clear: {
            description: 'Clear terminal',
            usage: 'clear'
        }
    }
};