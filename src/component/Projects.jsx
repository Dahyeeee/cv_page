import React from "react";
import styled from "styled-components";
import Project from "./Project";
import projects from "../assets/data/projects";

export default function Projects() {
  return (
    <ProjectsWrapper>
      <h2>{`{ Project }`}</h2>
      {projects.map((project) => (
        <Project data={project} key={project.title} />
      ))}
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div``;
