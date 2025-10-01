import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kseniia Starodubtseva',
  description: "Personal portfolio website of Kseniia Starodubtseva - Data Analysis student and aspiring developer.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Kseniia`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  I’m a final-year <strong className="text-stone-100">Data Analysis student</strong> based in Italy, passionate about turning code and data into real, usable solutions. My background mixes work with <strong className="text-stone-100">Python</strong>, <strong className="text-stone-100">Java</strong>, and the <strong className="text-stone-100">MERN stack</strong>, and I'm always exploring new areas of tech — from <strong className="text-stone-100">machine learning</strong> to <strong className="text-stone-100">web</strong> and <strong className="text-stone-100">game development</strong>.
</p>
<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  Recently, I’ve been building a portfolio with academic projects like a <strong className="text-stone-100">Java-based game</strong>, a <strong className="text-stone-100">full-stack food delivery app</strong>, and <strong className="text-stone-100">data mining models</strong> for binary classification. I'm actively looking for opportunities where I can keep learning, contribute to meaningful projects, and grow as a developer and data professional.
</p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Before I started working with data, I was studying International Relations with business major in Russia. Over time, I realized I was far more drawn to data, technology, and programming than to diplomacy, so I moved to Sicily, Italy, and switched my focus to Data Analysis, which I’ve been studying for the past three years.
This mix of backgrounds has given me a unique perspective: business studies taught me how organizations operate and grow, while data analysis gave the skills to work with code, data, and analytics to make that growth happen. I’m especially interested in creating tools and solutions that unite these two worlds — helping businesses make smarter, data-driven decisions.
Outside of tech, I’m passionate about freediving — the sport that gives me mental peace and focus — as well as gaming, traveling, and trying out new extreme sports and hobbies. `,
  aboutItems: [
    {label: 'Location', text: 'Messina, Italy', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Russian', Icon: FlagIcon},
    {label: 'Interests', text: 'Freediving, Gaming, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Messina', Icon: AcademicCapIcon},
    //{label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Russian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Italian',
        level: 5,
      },
      {
        name: 'French',
        level: 2,
      },
      {
        name: 'Swedish',
        level: 2,
      }
    ],
  },
  {
    name: 'Programming and Development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'C',
        level: 5,
      },
    ],
  },
  {
    name: 'Data Analysis and Databases',
    skills: [
      {
        name: 'Jupyter Notebook',
        level: 9,
      },
      {
        name: 'MATLAB',
        level: 7,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
    ],
  },
  {
    name: 'Web and Technical Skills',
    skills: [
      {
        name: 'HTML & CSS',
        level: 8,
      },
      {
        name: 'Excel',
        level: 7,
      },
      {
        name: 'Jira',
        level: 4,
      },
      {
        name: 'Node.js',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Munch - Food Delivery Website',
    description: 'Munch is a full-stack food delivery platform, where users can browse food items, add them to their cart, make payments and place orders. It was built with the MERN stack.',
    url: 'https://github.com/spiriiito/Munch-Food-Delivery',
    image: porfolioImage1,
  },
  {
    title: 'Monstrum - Strategy Game in Java',
    description: 'Monstrum is a strategy game developed in Java, where players command a monster and engage in tactical battles. The game features various character classes and game modes.',
    url: 'https://github.com/spiriiito/Monstrum-Game',
    image: porfolioImage2,
  },
  {
    title: 'Shark Attack Fatality Prediction',
    description: 'This machine learning project uses real-world shark attack data to predict whether an incident is likely to be fatal or non-fatal, based on various features such as location, activity, time, and victim profile. It demonstrates the full data mining pipeline using a Jupyter Notebook.',
    url: 'https://github.com/spiriiito/Shark-Attack-Fatality-Prediction',
    image: porfolioImage3,
  },
  {
    title: 'Gun Violence Severity Prediction',
    description: 'This project aims to predict the severity of gun violence incidents using machine learning techniques. It analyzes various factors such as location, time, and incident characteristics to provide insights into potential outcomes.',
    url: 'https://github.com/spiriiito/Gun-Violence-Severity-Prediction',
    image: porfolioImage4,
  },
];

/**
 * Resume section 
 */
export const education: TimelineItem[] = [
  {
    date: '2019 - 2022',
    location: 'Saint Petersburg State University',
    title: 'International Relations',
    content: <p>Studied International Relations at Saint Petersburg State University with a focus on politics, business and entrepreneurship. Developed strong skills in languages, including advanced English for professional use and Swedish.</p>,
  },
  {
    date: '2022 - Present',
    location: 'University of Messina',
    title: 'Bachelors in Data Analysis',
    content: <p>Currently in the final year of my Data Analysis degree in Italy, where I have gained extensive knowledge in computer science and data analysis. My studies cover programming in C, Python, and Java, databases, web programming, machine learning, AI, and related fields.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2021 - 2022',
    location: 'Freelance',
    title: 'Quality Assurance Tester',
    content: (
      <p>
        Worked as a freelance QA tester on crowdtesting platforms such as TestIO, testing a variety of commercial websites and mobile applications. Gained experience both independently and within tester teams, performing cross-device and cross-OS testing (including virtual machines) and documenting/reporting bugs to ensure functionality, usability, and quality.
      </p>
    ),
  }
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I`m always open to new projects, ideas and opportunities. Let`s connect and collaborate! ',
  items: [
    {
      type: ContactType.Email,
      text: 'spiriiito@gmail.com',
      href: 'mailto:spiriiito@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Messina, Italy',
      href: 'https://www.google.ca/maps/place/Messina,+Italy',
    },
    {
      type: ContactType.Instagram,
      text: '@ksusha.starr',
      href: 'https://www.instagram.com/ksusha.starr/',
    },
    {
      type: ContactType.Github,
      text: 'spiriiito',
      href: 'https://github.com/spiriiito',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/spiriiito'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kseniia-starodubtseva-85872027b'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ksusha.starr/'},
];
