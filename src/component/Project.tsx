import React from "react";
import styled from "styled-components";
import { ProjectType } from "../type/types";

type PropsType = {
  project: ProjectType;
};

export default function Project({ project }: PropsType) {
  const { title, description, contribute, imgUrl, imgAlt, link } = project;

  return (
    <ProjectWrapper>
      <Title>{title}</Title>
      <p>{description} </p>
      <Img src={imgUrl} alt={imgAlt} />
      <h4>What I've done in this project</h4>
      <ul>
        {contribute.map((each) => (
          <li key={each}>{each}</li>
        ))}
      </ul>
      <a href={link} target="_blank">
        <p>See more about this Project</p>
      </a>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  width: 100%;
  border: solid black 1px;
  background-color: rgba(255, 255, 255, 0.536);
  padding: 2rem;
  margin: 1rem 0;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 90%;
  margin: 1rem;
`;
