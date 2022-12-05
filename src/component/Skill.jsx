import React from "react";
import styled from "styled-components";
import htmlLogo from "../assets/img/icons8-html-5-96.png";
import cssLogo from "../assets/img/icons8-css3-96.png";
import jsLogo from "../assets/img/icons8-javascript-96.png";
import tsLogo from "../assets/img/icons8-typescript-96.png";
import reactLogo from "../assets/img/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
import reduxLogo from "../assets/img/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png";

export default function Skill() {
  return (
    <div>
      <Title>{`{ Skill }`}</Title>
      <SkillLogos>
        <SkillEach>
          <SkillLogo src={htmlLogo} alt="html logo" />
          <span>HTML</span>
        </SkillEach>
        <SkillEach>
          <SkillLogo src={cssLogo} />
          <span>CSS</span>
        </SkillEach>
        <SkillEach>
          <SkillLogo src={jsLogo} alt="js logo" />
          <span>Javascript</span>
        </SkillEach>
        <SkillEach>
          <imgSkillLogo src={tsLogo} alt="ts logo" />
          <span>Typescript</span>
        </SkillEach>
        <SkillEach>
          <SkillLogo src={reactLogo} />
          <span>react</span>
        </SkillEach>
        <SkillEach>
          <SkillLogo src={reduxLogo} alt="redux logo" />
          <span>redux</span>
        </SkillEach>
      </SkillLogos>
    </div>
  );
}

const Title = styled.h2`
  margin: 2rem 0;
  font-size: 40px;
  color: navy;
  letter-spacing: 0.5rem;
`;

const SkillLogos = styled.div`
  display: flex;
`;

const SkillEach = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;
`;

const SkillLogo = styled.img`
  width: 70px;
`;
