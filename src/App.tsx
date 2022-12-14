import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Education from "./component/Education";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Introduction from "./component/Introduction";
import Language from "./component/Language";
import Projects from "./component/Projects";
import Skill from "./component/Skill";

const languageSetting = {
  en: "English",
  ko: "한국어",
};

function App() {
  const [language, setLanguage] = useState(languageSetting.en);
  const { t } = useTranslation();

  return (
    <Box>
      <Header language={language} setLanguage={setLanguage} />
      <Introduction />
      <Skill />
      <Projects />
      <Education />
      <Language />
      <Footer />
    </Box>
  );
}

const Box = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: left;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default App;
