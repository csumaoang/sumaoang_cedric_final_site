import React from "react";

const WorkExperience = () => {
  const projects = [
    {
      title: "Drug Research Platform",
      description:
        "Created a platform to research therapeutics built with React, Next.js, D3, and Neo4j. Features include publication search, filter, and graph data analysis.",
      image: "https://picsum.photos/id/41/200",
      link: "https://www.mlinsightsandmetrics.com/",
      techList: ["React", "Next.js", "Neo4j", "D3"],
    },
  ];

  return (
    <section id="work">
      <h2>Work Experience</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <ul>
            {project.techList.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
