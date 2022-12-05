import React from "react";
import styled from "styled-components";

export default function Project({ data }) {
  const { title, description, contribute, imgUrl, imgAlt, link } = data;

  return (
    <ProjectWrapper>
      <Title>{title}</Title>
      <p>{description} </p>
      <img src={imgUrl} alt={imgAlt} />
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
  text-align: left;
  border: solid black 1px;
  background-color: rgba(255, 255, 255, 0.536);
  padding: 2rem;
  margin: 1rem;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
