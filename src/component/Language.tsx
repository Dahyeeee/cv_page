import React from "react";
import styled from "styled-components";
import languages from "../assets/data/languages";
import { LanguageType } from "../type/types";
import { Title } from "./Skill";

export default function Language() {
  return (
    <>
      <Title>{`{ Language }`}</Title>
      {languages.map((language: LanguageType) => (
        <Wrapper>
          <span>{language.test + "  :   "}</span>
          <Bold>{language.score + " "}</Bold>
          <span>{language.date}</span>
        </Wrapper>
      ))}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
`;
const Bold = styled.span`
  font-weight: bold;
`;
