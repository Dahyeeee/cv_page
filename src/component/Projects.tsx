import React from "react";
import styled from "styled-components";
import Project from "./Project";
import projects from "../assets/data/projects";
import { Title } from "./Skill";

export default function Projects() {
  return (
    <div>
      <Title>{`{ Project }`}</Title>
      {projects.map((project) => (
        <Project data={project} key={project.title} />
      ))}
    </div>
  );
}
