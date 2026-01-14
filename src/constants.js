// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import expoLogo from "./assets/tech_logo/expo.png";
import apiLogo from "./assets/tech_logo/api.png";
import androidLogo from "./assets/tech_logo/android.png";
import iosLogo from "./assets/tech_logo/ios.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import alberuni from "./assets/company_logo/alberuni.png";

// Education Section Logo's
import bsaLogo from "./assets/education_logo/numl_logo.png";
import vpsLogo from "./assets/education_logo/shawn_logo.png";

// Project Section Logo's
import coiffureLogo from "./assets/work_logo/coiffure.png";
import genUi from "./assets/work_logo/genui.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import restaurantLogo from "./assets/work_logo/restaurant.png";
import shopLogo from "./assets/work_logo/shopAshine.png";
import appointyLogo from "./assets/work_logo/appointy.png";
import bookLogo from "./assets/work_logo/book.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import foodLogo from "./assets/work_logo/food.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "REST APIs", logo: apiLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", logo: reactjsLogo },
      { name: "Expo", logo: expoLogo },
      { name: "Android", logo: androidLogo },
      { name: "IOS", logo: iosLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Hands On Experience",
    date: "",
    desc: "Over one year experience in Full Stack developement. Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Build responsive UI and implement RESTful APIs.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "React Native",
      "Tailwind CSS",
      "Node JS",
      "Express JS",
      "Rest APIs",
      "API Integration",
      "MongoDb",
      "MySQL",
    ],
  },
  {
    id: 1,
    img: alberuni,
    role: "Business Developer Intern",
    company: "Al-Beruni Tech",
    date: "",
    desc: "Enhanced client relationships by conducting research and identifying key business opportunities. Organized networking events to foster connections between company representatives and potential clients",
    skills: [
      "Communication Skills",
      "Strategic Thinking",
      "Market Research & Analysis",
      "Networking",
      "Relationship Building",
      ,
      "Digital Marketing",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bsaLogo,
    school: "NUML, Islamabad",
    date: " Feb 2022 - Jan 2026",
    grade: "2.7 CGPA",
    desc: "I completed my Bachelor's degree in Software Engineering (BSSE) from NUML ISLAMABAD. Throughout my studies, I gained practical insights into the world of software development. My time at NUML allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSSE (Software Engineering)",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "Shawn School And College, D I Khan",
    date: "Apr 2019 - March 2021",
    grade: "83%",
    desc: "I completed my Intermediate education from Shawn School And College, D I Khan, where I studied Physics, Chemistry, and Mathematics.",
    degree: "Intermediate - FSc Pre-Engineering",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Shawn School And College, D I Khan",
    date: "Apr 2017 - March 2019",
    grade: "89.9%",
    desc: "I completed my Matric education from Shawn School And College, D I Khan, where I studied Physics, Chemistry, and Mathematics.",
    degree: "Matric",
  },
];

export const projects = [
  {
    id: 0,
    title: "Coiffure - Salon App",
    description: "React Native mobile application for booking salon appointments, viewing services and stylists profiles, and trying hairstyles on your face using AI models.",
    image: coiffureLogo,
    tags: ["React Native", "Expo", "Node Js", "Express", "MongoDB", "APIs", "JWT"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Appointment Booking ",
    description: "Appointy is a full-stack doctor appointment web app built with the MERN stack, featuring patient, doctor, and admin logins. It supports online booking and profile management. The app provides a user-friendly interface with responsive design and comprehensive features for seamless healthcare.",
    image: appointyLogo,
    tags: ["MERN Stack", "Tailwind CSS", "API", "JWT"],
    github: "",
    webapp: "https://appointy-roan.vercel.app/",
  },
  {
    id: 2,
    title: "Shop Ashine",
    description: "Shop Ashine is a modern e-commerce web application built with React.js and Tailwind CSS. It features a responsive design, product listings, shopping cart functionality, and a user-friendly interface for seamless online shopping.",
    image: shopLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
    github: "",
    webapp: "https://shop-ashine.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant Reservation",
    description: "This is a full-stack restaurant reservation web application built with the MERN stack. It allows users to book tables, view menus, and manage reservations. The app features a user-friendly interface and responsive design for seamless dining experiences.",
    image: restaurantLogo,
    tags: ["React JS", "Node Js", "Express", "API", "MongoDB"],
    github: "",
    webapp: "https://reservation-livid.vercel.app/",
  },
  {
    id: 4,
    title: "Gen UI - AI component generator",
    description: " Gen UI is an AI-powered web application that generates customizable UI components based on user input. Built with React.js and Tailwind CSS, it leverages Gemini APIs to create responsive and visually appealing designs for web projects.",
    image: genUi,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Gemini APIs", "Tailwind CSS"],
    github: "",
    webapp: "https://gen-ui-psi.vercel.app/",
  },
  {
    id: 5,
    title: "Book Store",
    description: "A full-stack book store web application built with the MERN stack. It allows users to browse, search, and purchase books online. The app features a user-friendly interface, secure payment integration, and efficient inventory management.",
    image: bookLogo,
    tags: ["React JS", "Tailwind CSS", "Node Js", "Express", "API", "MongoDB"],
    github: "",
    webapp: "",
  },
  {
    id: 6,
    title: "Food At Your Door",
    description: " A full-stack food delivery web application built with the MERN stack. It enables users to browse menus, place orders, and track deliveries in real-time. The app features a responsive design and seamless user experience for convenient food ordering.",
    image: foodLogo,
    tags: ["React JS", "Node Js", "Express", "API", "MongoDB"],
    github: "",
    webapp: "",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Movie Recommendation",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
];
