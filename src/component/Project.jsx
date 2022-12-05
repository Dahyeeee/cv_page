import React from "react";

export default function Project({ data }) {
  const { title, description, contribute, imgUrl, link } = data;
  return (
    <div class="project">
      <div class="project_title">{title}</div>
      <p>{description} </p>
      <img class="newsAppImg" src={imgUrl} alt="news search app image" />
      <h4>What I've done in this project</h4>
      <ul>
        {contribute.map((each) => (
          <li>{each}</li>
        ))}
      </ul>
      <a href={link} target="_blank">
        <p class="link">See more about this Project</p>
      </a>
    </div>
  );
}
