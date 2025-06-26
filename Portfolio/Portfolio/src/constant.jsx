// skill section logo
import html from "./assets/html.png";
import bootstrap from "./assets/bootstrap.png";
import css from "./assets/css.png";
import express from "./assets/express.png";
import figma from "./assets/figma.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import javascript from "./assets/javascript.png";
import materialui from "./assets/materialui.png";
import mongodb from "./assets/mongodb.png";
import netlify from "./assets/netlify..png";
import postman from "./assets/postman.png";
import Reactjs from "./assets/reactjs.png";
import redux from "./assets/redux.png";
import tailwindcss from "./assets/tailwindcss.png";
import vercel from "./assets/vercel.png";
import vscode from "./assets/vscode.png";

//project section logo

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
      { name: "MySQL", logo: mysqlLogo },
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
