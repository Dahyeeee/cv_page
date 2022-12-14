import profileImg from "../img/KakaoTalk_20220620_163952359.jpg";
import phoneLogo from "../img/icons8-phone-50.png";
import emailLogo from "../img/icons8-mail-50.png";
import githubLogo from "../img/icons8-github-32.png";
import blogLogo from "../img/icons8-blog-30.png";
import { ProfileType } from "../../type/types";

const profile: ProfileType = {
  imgUrl: profileImg,
  imgAlt: "A female smiling wearing a black top",
  subTitle: "Conditional Achiever",
  introductionParagraphs: [
    "I'm quite easy going and not so competitive in general. But when it comes to programming, I become a passionate and enthusiastic achiever.",
    "I'm interested in a sustainable programming, which means I want to write code that never require to be written all over again. I'm a self-taught learner who can pick up new skills by searching and studying by myself.",
    "I have strong communication skills and work ethic. Asking questions and helping people without any hesitation are my good qualities to work with others.",
  ],
  contacts: [
    {
      name: "phone",
      logoUrl: phoneLogo,
      logoAlt: "phone Icon",
      content: "82+ 010- 2173- 3071",
    },
    {
      name: "mail",
      logoUrl: emailLogo,
      logoAlt: "mail Icon",
      content: "06robin11@gmail.com",
    },
    {
      name: "github",
      logoUrl: githubLogo,
      logoAlt: "github Icon",
      content: "https://github.com/Dahyeeee",
      link: "https://github.com/Dahyeeee",
    },
    {
      name: "blog",
      logoUrl: blogLogo,
      logoAlt: "blog Icon",
      content: "https://lots-of-grace.tistory.com/",
      link: "https://lots-of-grace.tistory.com/",
    },
  ],
};

export default profile;
