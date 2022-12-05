import React from "react";
import styled from "styled-components";
import educations from "../assets/data/educations";
import { Title } from "./Skill";

export default function Education() {
  return (
    <>
      <Title>{`{ Education }`}</Title>
      {educations.map((education) => {
        const { insititution, studySubject, duration } = education;
        return (
          <EducationEachSt>
            <SubTitleSt>{insititution}</SubTitleSt>
            <ContentSt>{studySubject}</ContentSt>
            <DurationSt>{duration}</DurationSt>
          </EducationEachSt>
        );
      })}
    </>
  );
}

const EducationEachSt = styled.div`
  padding-bottom: 1rem;
`;

const SubTitleSt = styled.div`
  margin-top: 0.5rem;
`;

const ContentSt = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
`;

const DurationSt = styled.span`
  margin-left: 0.5rem;
`;
