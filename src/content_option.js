import Legacy from "../src/assets/images/legacy-app-sq-01.png";
import AICard from "../src/assets/images/AIfigmanew.png";
import AIFigma from "../src/assets/images/ai-card.svg";
import Wi from "../src/assets/images/wi.png";
import UiChi from "../src/assets/images/Home.png";
import LegacyImg1 from "../src/assets/images/legacy-img1.png";

import WiInkDash from "../src/assets/images/Wi-Dash-Cal.png";
import WiPortal from "../src/assets/images/Wi-ParentPortal.png";
import WiGames from "../src/assets/images/wi-games.png";
import WiReskin from "../src/assets/images/wi-reskin.png";
import WiBadges from "../src/assets/images/badges.png";

import AIStartScreen from "../src/assets/images/ai-tutor-hi.gif";
import AIYoutube from "../src/assets/images/ai-youtube.gif";
import AiProductFeatures from "../src/assets/images/ai-tech.png";
import AiPremium from "../src/assets/images/ai-premium.png";

const logotext = "Jillian Kay";
const meta = {
  title: "Jillian Kay",
  description:
    "I’m Jillian Kay designer and developer,currently working out of Colorado",
};

const introdata = {
  title: "Hi, I’m Jillian Kay",
  animated: {
    first: "Glad you're here",
    second: "I code and design software",
    third: "and web and mobile apps",
  },
  description:
    "—a creative problem-solver with a passion for design, tech, and bringing bold ideas to life. I love turning complex challenges into clean, functional solutions. When I’m not deep in a project, you’ll find me exploring the rugged beauty of the American West, chasing inspiration, or working on my next artistic adventure. Innovation, grit, and a touch of curiosity keep me moving forward.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "a bit about my self",
  aboutme:
    "—a creative problem-solver with a passion for design, tech, and bringing bold ideas to life. I love turning complex challenges into clean, functional solutions. When I’m not deep in a project, you’ll find me exploring the rugged beauty of the American West, chasing inspiration, or working on my next artistic adventure. Innovation, grit, and a touch of curiosity keep me moving forward.",
};
const worktimeline = [
  {
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

const skills = [
  {
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

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: Legacy,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: AIFigma,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: UiChi,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: Wi,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const dataproject = [
  {
    name: "Legacy",
    img: Legacy,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "/legacy",
    description:
      "Worked on Legacy App, an estate planning platform for lawyers and clients, where I built and implemented React components, designed new features as user needs came up. These new features replaced third-party software with in-house solutions. Also gave the UI/UX some love in Figma to keep things smooth and user-friendly and more brand identity.",
    prob1:
      "1. The client needed a way to manage their estate planning documents and clients in one place. Clients are often older and potentially less tech savy than an average user.",
    sol1: "I researched similar products and found there was a gap in the market for this need. I used industry standards, was WCAG compliancy, and made sure the UI was easy to use for all users.",
    prob2:
      "2. Create documents for export that need client signatures that dynamically pull data from the current Data Bank.",
    sol2: "I replaced a third party software and built a visual hierarchy that allows lawyers to pick specific documents for each user and export them for signature.",
    prob3:
      "3. Our current Data Bank stored Will & Trust data in the same place and I needed it to be separate for the new feature.",
    sol3: "Using distinct on-brand colors and icons, I was able to separate the two and make it easy for the user to understand the difference. While not diverting too much from the current expierience I was able to implement a new UX for the new feature.",
    img1: LegacyImg1,
  },
  {
    name: "AI Tutor",
    link: "/aitutor",

    img: AIFigma,
    description:
      "I co-created this AI Tutor platform alongside an engineer, transforming the way students engage with learning with AI. Designed to be both intuitive and adaptive, the platform uses AI to deliver interactive tutor sessions, real-time feedback, and personalized learning paths. Using AI as a tool for learning and not a replacement. From dynamic testing tools to seamlessly generated quizzes, every feature is built to enhance comprehension and retention. This project showcases my ability to blend UI design, user experience, and innovative problem-solving to create a smarter, more engaging educational tool.",
   goTo: "https://aitutor-qa.softwarebbd.com/ test.user Password007",
      prob1:
      "1. Students of all ages are overwhelmed with the amount of content online they can use to study from.",
    sol1: "I created a platform that generates study guides and quizzes relevant to the material the student is studying. This allows the student to focus on the material they are learning and not get overwhelmed with the amount of content online.",
    prob2:
      "2. I want to use AI to help students study on their own but not replace original content or get flagged for AI content.",
    sol2: "Our AI Tutor generates content but NEVER writes content for students. This allows the student to study on their own and not get flagged for using AI generated content.",

    prob3:
      "3. Students now are used to engaging video content and I wanted to make sure the platform was engaging for all ages.",
    sol3: "Using ChatGPT and another API I was able to integrate YouTube videos and other content to make the platform engaging for all ages. I also used a color scheme that was engaging and not intimidating for young users and not too childish for older students. In phase 2 of software would love to add themes or auto generate UI based on age upon sign up.",
    img1: AIStartScreen,
    img3: AIYoutube,
    img6: AiProductFeatures,
    img7: AiPremium,
  },

  {
    name: "University of Chicago",
    img: UiChi,
    description:
      "Worked with The Growth Academy an Economic research group at The University of Chicago. I helped them build a website that was more professional and helped them create a cohesive brand identity.",
    link: "/uchi",
    prob1:
      "The client needed a way to manage their estate planning documents and clients in one place. Clients are often older and potentially less tech savy than an average user.",
  },
  {
    name: "Wonder Ink",

    img: Wi,
    description:
      "WonderInk is a learning management system for leaders, parents, and students. I revamped the front-end interface to align with brand recognition, taking the lead in design decisions.",
    link: "/wonder",
    prob1:
      "1. Youth leaders, who were often volunteers, wanted a way to easily plan lessons, track their students progress, and keep them engaged in the program all week.",
    sol1: "I created a drag and drop lesson calendar, and dashboard that allowed leaders to see what students were doing.",
    prob2:
      "2. The client wanted a way to keep students engaged in the program all week. Having parents involved was key to this.",
    sol2: "I designed a parent portal and games that were engaging for students and families.",
    prob3: "3. The app was unrecognizable to the brand and needed a facelift.",
    sol3: "I updated our app's color scheme and style that more on brand and engaging while still being keeping it professional for teachers and admin users.",
    img1: WiInkDash,
    img2: WiPortal,
    img3: WiGames,
    img4: WiBadges,
    img5: WiReskin,
  },
];

const contactConfig = {
  YOUR_EMAIL: "fitzmauricejillian@gmail.com",
  YOUR_FONE: "(303)901-3230",
  description:
"",   // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "lUad2zC_XyZfP4qRY",
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
