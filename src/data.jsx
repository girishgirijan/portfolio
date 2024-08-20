import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/SocialMedia-1.png";
import Work2 from "./assets/Chat-1.png";
import Work3 from "./assets/Blog-1.png";
import Work4 from "./assets/Fitness-1.png";
import Work5 from "./assets/AI-1.png";
import Work6 from "./assets/ToDo - 1.png";
import Work7 from "./assets/Expense-tracker-1.png";
import Work8 from "./assets/ecommerce-angular-stripe-1.png";
import Work9 from "./assets/QuizApp-1.png";
import Work10 from "./assets/Authentication_app.png";
import Work11 from "./assets/AI_Tool.png";
import Work12 from "./assets/mern-blog.png";
import Work13 from "./assets/google-clone-nextjs.png";
import Work14 from "./assets/IMDb_Clone.png";
import Work15 from "./assets/Expense-Tracker.png";
import Work16 from "./assets/Chat-application.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Girish",
    href: "",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Girijan",
    href: "",
  },

  {
    id: 3,
    title: "Phone : ",
    description: "+1 413-993-5427",
    href: "",
  },

  {
    id: 4,
    title: "Email : ",
    description: "girish.v.girijan@gmail.com",
    href: "",
  },

  {
    id: 5,
    title: "Linkedin : ",
    description: "Girish Girijan",
    href: "https://www.linkedin.com/in/girish-girijan-09963282/",
  },
];

export const stats = [
  {
    id: 1,
    no: "5+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "20+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "20+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "25+",
    title: " Kudos",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 Mar - PRESENT",
    title:
      "Technical Support <span> Splunk  </span> <h3>Nova Scotia, Canada</h3>",
    desc: "Strong command of platforms like AWS, salesforce, slack, and service now. Supporting our clients with cloud and administrative issues and exposure to Bit buck, Jira, and Confluence ...",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2016 April - 2018 May",
    title:
      "Web Developer <span> Path solutions India private limited   </span> <h3>Kerala, India</h3>",
    desc: "•	Completed 12+ web development projects, showcasing proficiency in HTML, CSS, and JavaScript, this included 3 projects for Fortune 500 clients, contributing to a 30% increase in project acquisition ...",
  },
  // {
  //   id: 1,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2022 Mar - PRESENT',
  //   title: 'Full Stack Developer <span> Tektonic Managed IT Services  </span> <h3>Ontario, Canada</h3>',
  //   desc: 'Implemented code optimization and caching strategies, leading to a 10% improvement in web application performance, resulting in faster load times and enhanced user satisfaction ...',
  // },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2020 Feb - 2022 Feb',
  //   title: 'Full Stack Developer <span> Citadel Mortgages  </span> <h3>Ontario, Canada</h3>',
  //   desc: 'Collected business requirements, verified API endpoints, payloads, and responses; and then systematically planned, effective execution of new concepts and constructed UI and functionality leveraging a component library ...',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2017 Nov - 2018 Apr',
  //   title: 'Full Stack Developer <span> Nuvento Inc </span> <h3>Kerala, India</h3>',
  //   desc: 'Completed 10+ web development projects, showcasing proficiency in HTML, CSS, and JavaScript, this included 3 projects for Fortune 500 clients, contributing to a 30% increase in project acquisition....',
  // },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 May - 2020 Jan",
    title:
      "Computer software and database development <span> Lambton College</span> <h3>Ontario, Canada</h3>",
    desc: "The Computer Software & Database Development program is an Ontario College Graduate Certificate that offers the opportunity to study the most current trends in software development",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012 Nov - 2015 Nov",
    title:
      "Master Degree in Computer science <span>Calicut University</span> <h3>Kerala, India</h3>",
    desc: "Providing a sound theoretical background as well as good practical exposure in the relevant areas. Intended to provide a modern, industry oriented education in applied computer science.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009 July - 2012 - June",
    title:
      "Bachelor Degree in Computer science <span>MG University</span> <h3>Kerala, India</h3>",
    desc: "Focuses on knowledge of the basics of computer application and software development",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "95",
  },

  {
    id: 2,
    title: "CSS",
    percentage: "89",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "85",
  },

  {
    id: 4,
    title: "React",
    percentage: "90",
  },
  {
    id: 5,
    title: "Angular",
    percentage: "90",
  },
  {
    id: 6,
    title: "Vue.js",
    percentage: "87",
  },
  {
    id: 7,
    title: "Node",
    percentage: "92",
  },

  {
    id: 8,
    title: "NextJs",
    percentage: "80",
  },

  {
    id: 9,
    title: "Typescript",
    percentage: "80",
  },

  {
    id: 10,
    title: "MongoDB",
    percentage: "80",
  },
  {
    id: 11,
    title: "MySQL",
    percentage: "87",
  },
  {
    id: 12,
    title: "MS SQL",
    percentage: "90",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Scoial Media Web Application",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MongoDB, Express, React, NodeJs, MUI",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "ScocialMedia",
        href: "https://github.com/girishgirijan/ScocialMedia",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Chat Web Application",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MongoDB, Express, React, NodeJs, Socket",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Chat-App-TalkTime",
        href: "https://github.com/girishgirijan/Chat-App-TalkTime",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Personal Blog Web Application",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MySql, Express, React, NodeJs",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Personal-Blog",
        href: "https://github.com/girishgirijan/Personal-Blog",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Gym Web Site",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "React, Typescript, Tailwind",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "WellFit-fitness-app",
        href: "https://github.com/girishgirijan/WellFit-fitness-app",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "AI-Image Generator",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MongoDB, Express, React, NodeJs, Tailwind",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "AI-Image-Generator",
        href: "https://github.com/girishgirijan/AI-Image-Generator",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "ToDO web site",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "React, Typescript, Tailwind",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "ToDo",
        href: "https://github.com/girishgirijan/ToDo",
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: "Expense Tracker",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MongoDB, Express, React, NodeJs, ChartJs",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Expense Tracker",
        href: "https://github.com/girishgirijan/Expense-Tracker",
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: "Ecommerce",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "Express, Angular, NodeJs, Stripe(Payment implementation)",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Ecommerce",
        href: "https://github.com/girishgirijan/ecommerce-angular-stripe",
      },
    ],
  },
  {
    id: 9,
    img: Work9,
    title: "QuizApp",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "React.js with Asp.Net Core API and MS SQL",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "QuizApp",
        href: "https://github.com/girishgirijan/Quizapp_React_asp.net",
      },
    ],
  },
  {
    id: 10,
    img: Work10,
    title: "Authenticatio App",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MongoDB, Express, Reactjs, Nodejs, JWT",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Authenticatio App",
        href: "https://github.com/girishgirijan/authentication_web_app",
      },
    ],
  },
  {
    id: 11,
    img: Work11,
    title: "AI SAAS Tool",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "Nextjs, MongoDB, Open AI",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "AI SAAS Tool",
        href: "https://github.com/girishgirijan/ai-saas",
      },
    ],
  },
  {
    id: 12,
    img: Work12,
    title: "MERN Blog",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MongoDB, Express, React, Node, Tailwind",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Blog Web Application",
        href: "https://github.com/girishgirijan/mern-blog",
      },
    ],
  },
  {
    id: 13,
    img: Work13,
    title: "Google Clone",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "Nextjs, Tailwind",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Google Clone using Nextjs and Tailwind",
        href: "https://github.com/girishgirijan/next-google-clone",
      },
    ],
  },
  {
    id: 14,
    img: Work14,
    title: "IMDb Clone",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "Nextjs, Tailwind",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "IMDb Clone using Nextjs and Tailwind",
        href: "https://github.com/girishgirijan/imdb-clone",
      },
    ],
  },
  {
    id: 15,
    img: Work15,
    title: "Expense Tracker (MERN + GraphQL)",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MERN, GraphQL, Tailwind",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Expense Tracker using MERN, GraphQL and Tailwind",
        href: "https://github.com/girishgirijan/expense_tracker",
      },
      {
        icon: <FiExternalLink />,
        title: " ",
        desc: "www.expense-tracker-iv3c.onrender.com",
        href: "https://expense-tracker-iv3c.onrender.com/",
      },
    ],
  },
  {
    id: 16,
    img: Work16,
    title: "Chat Application",
    details: [
      {
        icon: <FaCode />,
        title: " ",
        desc: "MERN, Tailwind, JWT, Socket.io",
        href: "",
      },
      {
        icon: <FaGithub />,
        title: " ",
        desc: "Chat Applicatio using MERN, Tailwind, JWT and Socket.io",
        href: "https://github.com/girishgirijan/chat_app",
      },
      {
        icon: <FiExternalLink />,
        title: " ",
        desc: "www.chat-app-se07.onrender.com",
        href: "https://chat-app-se07.onrender.com/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
