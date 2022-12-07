import styled from "styled-components";
import Education from "./component/Education";
import Header from "./component/Header";
import Introduction from "./component/Introduction";
import Language from "./component/Language";
import Projects from "./component/Projects";
import Skill from "./component/Skill";

function App() {
  return (
    <Box>
      <Header />
      <Introduction />
      <Skill />
      <Projects />
      <Education />
      <Language />
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
