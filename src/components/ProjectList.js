import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((proj, index) => (
          <ProjectItem key={index} name={proj.name} about={proj.about} technologies={proj.technologies} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
