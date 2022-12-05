import React from "react";
import styled from "styled-components";
import skills from "../assets/data/skills";

export default function Skill() {
  return (
    <>
      <Title>{`{ Skill }`}</Title>
      <SkillLogos>
        {skills.map((skill) => (
          <SkillEach key={skill.name}>
            <SkillLogo src={skill.logo} alt={`${skill.name} logo`} />
            <span>{skill.name}</span>
          </SkillEach>
        ))}
      </SkillLogos>
    </>
  );
}

export const Title = styled.h2`
  padding-top: 3rem;
  padding-bottom: 1rem;
  margin: 0;
  font-size: 50px;
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
