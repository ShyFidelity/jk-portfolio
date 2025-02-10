import Legacy from "../src/assets/images/legacy-app-sq-01.png"
import AICard from "../src/assets/images/AIfigmanew.png"
import AIFigma from "../src/assets/images/ai-card.svg";
import Wi from "../src/assets/images/wi.png"
import UiChi from "../src/assets/images/Home.png"

const logotext = "Jillian Kay";
const meta = {
    title: "Jillian Kay",
    description: "I’m Jillian Kay designer and developer,currently working out of Colorado",
};

const introdata = {
    title: "Hi, I’m Jillian Kay",
    animated: {
        first: "Glad you're here",
        second: "I code and design software",
        third: "and web and mobile apps",
    },
    description: "—a creative problem-solver with a passion for design, tech, and bringing bold ideas to life. I love turning complex challenges into clean, functional solutions. When I’m not deep in a project, you’ll find me exploring the rugged beauty of the American West, chasing inspiration, or working on my next artistic adventure. Innovation, grit, and a touch of curiosity keep me moving forward.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "—a creative problem-solver with a passion for design, tech, and bringing bold ideas to life. I love turning complex challenges into clean, functional solutions. When I’m not deep in a project, you’ll find me exploring the rugged beauty of the American West, chasing inspiration, or working on my next artistic adventure. Innovation, grit, and a touch of curiosity keep me moving forward.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: Legacy,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: AIFigma,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: UiChi,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: Wi,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

];

const dataproject = [{
    name: "Legacy",
    img: Legacy,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "/legacy",
    description: "Worked on Legacy App, an estate planning platform for lawyers and clients, where I built and implemented React components, designed new features as user needs came up. These new features replaced third-party software with in-house solutions. Also gave the UI/UX some love in Figma to keep things smooth and user-friendly and more brand identity.", 
    prob1: "The client needed a way to manage their estate planning documents and clients in one place. Clients are often older and potentially less tech savy than an average user.",
    sol2: "I researched similar products and found there was a gap in the market for this need. I used industry standards, was WCAG compliancy, and made sure the UI was easy to use for all users.",
    prob2: "Create documents for export that need client signatures that dynamically pull data from the current Data Bank." ,
    sol2: "I replaced a third party software and built a visual hierarchy that allows lawyers to pick specific documents for each user and export them for signature.",
},
{
    name: "AI Tutor",

    img: AIFigma,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "/ai",
},
{
    name: "University of Chicago",

    img: UiChi,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "uchi",
},
{
    name: "Wonder Ink",

    img: Wi,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "/wonder",
},

];

const contactConfig = {
    YOUR_EMAIL: "fitzmauricejillian@gmail.com",
    YOUR_FONE: "(303)901-3230",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/ShyFidelity",
    linkedin: "https://www.linkedin.com/in/jillianfitzmaurice100/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    dataproject,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};