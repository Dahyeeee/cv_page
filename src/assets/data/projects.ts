import newsProjectImg from "../img/newsSearchApp.png";
import lensProjectImg from "../img/lensissingup.png";

const projects = [
  {
    title: "News Search App",
    description:
      "A simple web site where you can search news articles and bookmark your favorite articles. We used NYT articles API for this project.",
    contribute: [
      "Task distribution, drawing usecase, helping who struggled.",
      "used Redux-toolkit to handle global state.",
      "reduced time complexity from O(n2) to O(n) using indexing.",
    ],
    imgUrl: newsProjectImg,
    imgAlt: "News Searh App image",
    link: "https://lots-of-grace.tistory.com/71?category=578709",
  },
  {
    title: "Lens Website Renewal",
    description:
      "Lens e-commerce website. We developed basic features for e-commerce site such as sign up, login, show products detail, my page and shopping cart.",
    contribute: [
      "worked with UX/UI team and backend developer team.",
      "used React-query to get data from server and manupulate them.",
      "used React-hook-form to make a signup form.",
    ],
    imgUrl: lensProjectImg,
    imgAlt: "lens website signup page image",
    link: "https://lots-of-grace.tistory.com/71?category=578709",
  },
];

export default projects;
