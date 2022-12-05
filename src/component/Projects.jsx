import React from "react";
import styled from "styled-components";
import Project from "./Project";
import projects from "../assets/data/projects";

export default function Projects() {
  return (
    <ProjectsWrapper>
      <h2>{`{ Project }`}</h2>
      <Project data={projects[0]} />
      <Project data={projects[1]} />
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div``;
