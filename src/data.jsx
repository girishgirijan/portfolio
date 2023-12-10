import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/SocialMedia-1.png';
import Work2 from './assets/Chat-1.png';
import Work3 from './assets/Blog-1.png';
import Work4 from './assets/Fitness-1.png';
import Work5 from './assets/AI-1.png';
import Work6 from './assets/ToDo - 1.png';
import Work7 from './assets/Expense-tracker-1.png';
import Work8 from './assets/ecommerce-angular-stripe-1.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Girish',
    href: "",
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Girijan',
    href: "",
  }, 

  {
    id: 3,
    title: 'Phone : ',
    description: '+1 413-993-5427',
    href: "",
  },

  {
    id: 4,
    title: 'Email : ',
    description: 'girishvazheliparambil@mail.com',
    href: "",
  },

  {
    id: 5,
    title: 'Linkedin : ',
    description: 'Girish Girijan',
    href: "https://www.linkedin.com/in/girish-girijan-09963282/",
  },  
];

export const stats = [
  {
    id: 1,
    no: '4+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '15+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '15+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '20+',
    title: ' Kudos',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 Nov - PRESENT',
    title: 'Technical Consultant <span> Splunk </span> <h3>Halifax, Canada</h3>',
    desc: 'Provided technical solutions for more than fifteen customer projects, guaranteeing smooth functionality and integration....',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 Mar - 2021 Nov',
    title: 'Full Stack Developer <span> Leo Pharma Inc </span> <h3>Ontario, Canada</h3>',
    desc: 'Collected business requirements, verified API endpoints, payloads, and responses; and then systematically planned, effective execution of new concepts and constructed UI and functionality leveraging a component library....',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2015 Nov - 2018 Apr',
    title: 'Web Developer <span> Nuvento Inc </span> <h3>Kerala, India</h3>',
    desc: 'Completed 10+ web development projects, showcasing proficiency in HTML, CSS, and JavaScript, this included 3 projects for Fortune 500 clients, contributing to a 30% increase in project acquisition....',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 May - 2020 Jan',
    title: 'Computer software and database development <span> Lambton College</span> <h3>Ontario, Canada</h3>',
    desc: 'The Computer Software & Database Development program is an Ontario College Graduate Certificate that offers the opportunity to study the most current trends in software development',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012 Nov - 2015 Nov',
    title: 'Master Degree in Computer science <span>Calicut University</span> <h3>Kerala, India</h3>',
    desc: 'Providing a sound theoretical background as well as good practical exposure in the relevant areas. Intended to provide a modern, industry oriented education in applied computer science.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009 July - 2012 - June',
    title: 'Bachelor Degree in Computer science <span>MG University</span> <h3>Kerala, India</h3>',
    desc: 'Focuses on knowledge of the basics of computer application and software development',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '85',
  },

  {
    id: 4,
    title: 'React',
    percentage: '90',
  },

  {
    id: 5,
    title: 'Node',
    percentage: '92',
  },

  {
    id: 6,
    title: 'NextJs',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Typescript',
    percentage: '80',
  },

  {
    id: 8,
    title: 'MongoDB',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Scoial Media Web Application',
    details: [         
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'MongoDB, Express, React, NodeJs, MUI',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'ScocialMedia',
        href: 'https://github.com/girishgirijan/ScocialMedia',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Chat Web Application',
    details: [
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'MongoDB, Express, React, NodeJs, Socket',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'Chat-App-TalkTime',
        href: 'https://github.com/girishgirijan/Chat-App-TalkTime',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Personal Blog Web Application',
    details: [
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'MySql, Express, React, NodeJs',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'Personal-Blog',
        href: 'https://github.com/girishgirijan/Personal-Blog',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Gym Web Site',
    details: [
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'React, Typescript, Tailwind',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'WellFit-fitness-app',
        href: 'https://github.com/girishgirijan/WellFit-fitness-app',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'AI-Image Generator',
    details: [
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'MongoDB, Express, React, NodeJs, Tailwind',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'AI-Image-Generator',
        href: 'https://github.com/girishgirijan/AI-Image-Generator',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'ToDO web site',
    details: [
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'React, Typescript, Tailwind',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'ToDo',
        href: 'https://github.com/girishgirijan/ToDo',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Expense Tracker',
    details: [
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'MongoDB, Express, React, NodeJs, ChartJs',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'Expense Tracker',
        href: 'https://github.com/girishgirijan/Expense-Tracker',
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Ecommerce',
    details: [
      {
        icon: <FaCode />,
        title: ' ',
        desc: 'Express, Angular, NodeJs, Stripe(Payment implementation)',
        href: '',
      },
      {
        icon: <FaGithub />,
        title: ' ',
        desc: 'Ecommerce',
        href: 'https://github.com/girishgirijan/ecommerce-angular-stripe',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
