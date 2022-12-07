import React from "react";
import styled from "styled-components";
import educations from "../assets/data/educations";
import { EudcationType } from "../type/types";
import { Title } from "./Skill";

export default function Education() {
  return (
    <>
      <Title>{`{ Education }`}</Title>
      {educations.map((education: EudcationType) => {
        const { institution, studySubject, period } = education;
        return (
          <EducationEachSt key={institution}>
            <SubTitleSt>{institution}</SubTitleSt>
            <ContentSt>{studySubject}</ContentSt>
            <DurationSt>{period}</DurationSt>
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
