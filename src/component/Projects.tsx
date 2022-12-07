import React from "react";
import styled from "styled-components";
import Project from "./Project";
import projects from "../assets/data/projects";
import { Title } from "./Skill";
import { ProjectType } from "../type/types";

export default function Projects() {
  return (
    <div>
      <Title>{`{ Project }`}</Title>
      {projects.map((project: ProjectType) => (
        <Project project={project} key={project.title} />
      ))}
    </div>
  );
}
