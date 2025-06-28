// skill section logo
import htmlLogo from "./assets/html.png";
import bootstrapLogo from "./assets/bootstrap.png";
import cssLogo from "./assets/css.png";
import expressjsLogo from "./assets/express.png";
import figmaLogo from "./assets/figma.png";
import gitLogo from "./assets/git.png";
import githubLogo from "./assets/github.png";
import javascriptLogo from "./assets/javascript.png";
import materialuiLogo from "./assets/materialui.png";
import mongodbLogo from "./assets/mongodb.png";
import netlifyLogo from "./assets/netlify.png";
import postmanLogo from "./assets/postman.png";
import reactjsLogo from "./assets/reactjs.png";
import reduxLogo from "./assets/redux.png";
import tailwindcssLogo from "./assets/tailwindcss.png";
import vercelLogo from "./assets/vercel.png";
import vscodeLogo from "./assets/vscode.png";
import sqlLogo from "./assets/SQL.png";

// Education Section logo
import XSchoollogo from "./assets/X school.png";
import Diplomalogo from "./assets/umrer polytechnic.png";
import Degreelogo from "./assets/Kdk College.png";

//project section logo
import Qkartlogo from "./assets/Qkart.png";
import Qtifylogo from "./assets/Qtify.png";
import Qtriplogo from "./assets/Qtrip.png";
import FoodDeliverylogo from "./assets/foodDelivery.png";
import qtripstaticlogo from "./assets/qtripstatic.png";
import BotAIlogo from "./assets/BotAI.png";

export const skillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Express JS", logo: expressjsLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Degreelogo,
    school: "KDK College Of Engineering, Nagpur",
    date: "Sept 2016 - July 2019",
    grade: "74.15%",
    desc: "I have completed my Bachelor's degree  in Computer Engineering from RTMNU University, Nagpur. During my time at RTMNU. I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at RTMNU University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's Of Engineering -BE(Computer Engineering)",
  },
  {
    id: 1,
    img: Diplomalogo,
    school: "Umrer Polytechnic, Umrer",
    date: "Sept 2013 - July 2016",
    grade: "79.47%",
    desc: "I have completed my Diploma in Computer Technology from pune Board, Umrer. I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Diploma has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's Of Engineering",
  },
  {
    id: 2,
    img: XSchoollogo,
    school: "Jeevan Vikas Vidhyalaya",
    date: "Jun 2012 - May 2013",
    grade: "67.64%",
    desc: "I completed my class 10 education from Jeevan Vikas Vidhyalaya, WCL(Umrer), under the state board, where I studied Science with Computer.",
    degree: "State Board, Pune",
  },
];
export const projectInfo = [
  {
    id: 0,
    image: Qkartlogo,
    Description:
      "QKart is an E-commerce application offering a variety of products for customers to choose from.",
    title: "Qkart",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "node.js",
      " Express.js",
      "MongoDB",
    ],
    GitHub: "https://github.com/CrioDo/meshramnalu16-ME_QKART_FRONTEND_V2",
    Webapp: "https://qkart-frontends.vercel.app/",
  },
  {
    id: 1,
    image: Qtifylogo,
    Description:
      "QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
    title: "Qtify",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "API",
      "Material UI",
      "Customizing Third-Party Components",
    ],
    GitHub: "https://github.com/NalinaDevdasMeshram/L-square-QTify",
    Webapp: "https://q-tifys.vercel.app/",
  },
  {
    id: 2,
    image: Qtriplogo,
    Description:
      "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. ",
    title: "Qtrip",
    tags: ["HTML", "CSS", "Javascript", "BootStrap"],
    GitHub:
      "https://github.com/NalinaDevdasMeshram/meshramnalu16-ME_QTRIPDYNAMIC",
    Webapp:
      "https://qtripdyamicfrontend-mobu0kol2-nalina-devdas-meshrams-projects.vercel.app/",
  },
  {
    id: 3,
    image: qtripstaticlogo,
    Description:
      "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities",
    title: "QtripStatic",
    tags: ["HTML", "CSS", "Javascript", "BootStrap"],
    GitHub: "https://github.com/CrioDo/meshramnalu16-ME_QTRIPSTATIC",
    Webapp: "https://qtripprojectmy.vercel.app/",
  },
  {
    id: 4,
    image: BotAIlogo,
    Description:
      "BotAI is an Application that provide the user auto reply depen upon user question",
    title: "BotAI",
    tags: ["HTML", "CSS", "Javascript", "React.js", "API"],
    GitHub: "https://github.com/NalinaDevdasMeshram/BotAI",
    Webapp: "https://bot-ai-amber-beta.vercel.app/",
  },
  {
    id: 5,
    image: FoodDeliverylogo,
    Description:
      "Food Delivery is an E-commerce application offering a variety of food for customers to choose from.",
    title: "Food Delivery",
    tags: ["HTML", "CSS", "Javascript", "React.js"],
    GitHub: "https://github.com/NalinaDevdasMeshram/FoodDeliveryApp",
    Webapp: "https://food-delivery-app-theta-one.vercel.app/",
  },
];
