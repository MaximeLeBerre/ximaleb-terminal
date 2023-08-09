import {About} from "../../components/About/About.jsx";
import {Resume} from "../../components/Resume/Resume.jsx";

export const customCommands = {
    commands: {
        about: {
            description: "Get a summary about me",
            usage: 'about',
            fn: () => {
                return <About />
            },
            hidden: false
        },
        resume: {
            description: "Get my resume",
            usage: 'resume',
            fn: () => {
                return <Resume />
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
            description: 'get information about project',
            usage: 'goTo [project-name]',
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
        ls: {
            usage: 'ls',
            fn: () => {
                return "/terminal"
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