import styled from "styled-components";
import Header from "./component/Header";
import Introduction from "./component/Introduction";
import Projects from "./component/Projects";
import Skill from "./component/Skill";

function App() {
  return (
    <Box>
      <Header />
      <Introduction />
      <Skill />
      <Projects />
    </Box>
  );
}

const Box = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
`;

export default App;
