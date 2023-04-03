import Terminal from "~/components/apps/Terminal";
import Bear from "~/components/apps/Bear";

import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "CV",
    title: "CV",
    desktop: false,
    img: "img/icons/CV.png",
    link: "https://raw.githubusercontent.com/Ryan-Daley/CV/main/Ryan%20Daley%20CV.pdf"
  },
  {
    id: "home",
    title: "Home",
    desktop: true,
    show: true,
    width: 1000,
    height: 600,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  {
    id: "Linkedin",
    title: "Linkedin",
    desktop: false,
    img: "img/icons/linkedin.png",
    link: "https://www.linkedin.com/in/ryandaley74/"
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/Ryan-Daley"
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
 ];

export default apps;
