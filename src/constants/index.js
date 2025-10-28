import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  aws,
  laravel,
  next,
  postgresql,
  python,
  mern,
  bkcodetube,
  shutterProject,
  weather,
  govlink,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Development",
    icon: reactjs,
  },
  {
    title: "Next.js Applications",
    icon: next,
  },
  {
    title: "Laravel/PHP",
    icon: laravel,
  },
  {
    title: "MERN Stack",
    icon: mern,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Frontend Solutions",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2020- Present",
    points: [
      "Building modern web applications using React.js and Next.js",
      "Creating responsive designs that work seamlessly across all devices",
      "Implementing state management and optimizing application performance",
      "Developing reusable components and maintaining clean, efficient code",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tech Solutions",
    icon: mern,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Developing full-stack applications using React, Node.js, and MongoDB",
      "Building and maintaining RESTful APIs and database architectures",
      "Implementing user authentication and secure data handling",
      "Deploying and maintaining applications on cloud platforms",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Brian has been the fastest, best at communication, and greatest quality of work out of any developer I've had over the past year. Can't recommend him enough.",
    name: "Domain Connection And Phase 1 Implementation for Shutterguide.io",
    designation: "Client",
    company: "Upwork",
    date: "Jan 31, 2025 - Feb 7, 2025",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    link: "https://shutterguide.io",
  },
  {
    testimonial:
      "Brian is an all star at what he does (full-stack) and is an absolute pleasure to work with! Highly recommended. He is smart and agile.",
    name: "GovLinkGlobal.com — Build GovLink Global Platform using MERN Stack",
    designation: "Client",
    company: "Upwork",
    date: "Apr 17, 2025 - Sep 6, 2025",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    link: "https://govlinkglobal.com",
  },
  {
    testimonial:
      "Completed another project flawlessly, will definitely continue to use on my projects",
    name: "Website Additions",
    designation: "Client",
    company: "Upwork",
    date: "Feb 13, 2025 - Feb 16, 2025",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
  },
];

const projects = [
  {
    name: "BK INC WEATHER CHANNEL",
    description:
      "A modern weather application built with React, featuring real-time weather data, city search functionality, and detailed weather information including temperature, humidity, wind speed, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: null,
    live_site_link: "https://bkinc-weather.netlify.app",
  },
  {
    name: "GovLink Global",
    description:
      "MERN platform connecting elite consultants with US & global government projects. Smart search & matching; 2.4k+ talent, 98% success, ~48h avg match. Built for scale with clean, user-focused UI/UX.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: govlink,
    image_alt: "GovLink Global platform UI, built with MERN and user-focused UX",
    source_code_link: null,
    live_site_link: "https://govlinkglobal.com",
  },
  {
    name: "Photography Portfolio",
    description:
      "A professional photography portfolio website with dynamic image galleries, smooth transitions, and responsive design. Features client booking system and image optimization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shutterProject,
    source_code_link: null,
    live_site_link: "https://shutterguide.io",
  },
];

export { services, technologies, experiences, testimonials, projects };
