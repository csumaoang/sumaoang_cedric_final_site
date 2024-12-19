import React from "react";
import "./App.css";

// Basic Information Section
const BasicInfo = () => (
  <section id="basic-info">
    <h2>Cedric Sumaoang</h2>
    <p>Full Stack Web Developer</p>
    <contact>
      <a
        href="mailto:cedric.sumaoang@hotmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/cedric-sumaoang/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/csumaoang"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </contact>
  </section>
);

// Work Experience Section
const WorkExperience = () => {
  const projects = [
    {
      title: "Drug Research Platform",
      description:
        "Created a platform to research therapeutics built with React, Next.js, D3, and Neo4j. Features include publication search, filter, and graph data analysis.",
      image: "/images/drug.png",
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

// Skills Section
const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <p>
      Experienced full-stack developer with a focus on modern web technologies
      and cloud deployment solutions.
    </p>
    <div className="skill-categories">
      <div>
        <h3>Languages/Frameworks</h3>
        <ul>
          <li>JavaScript/TypeScript</li>
          <li>React/Next.js</li>
          <li>Python</li>
          <li>SQL/Neo4j</li>
        </ul>
      </div>
      <div>
        <h3>Tools</h3>
        <ul>
          <li>Git/GitHub</li>
          <li>Docker</li>
          <li>VSCode</li>
        </ul>
      </div>
    </div>
  </section>
);

// Resources Section
const Resources = () => {
  const resources = [
    {
      title: "How to Build a Portfolio Website with React ",
      image: "/images/document.png",
      summary: "Comprehensive guide to create a developer portfolio.",
      link: "https://www.freecodecamp.org/news/build-portfolio-website-react/",
    },
    {
      title: "Build a Stunning Portfolio website with React JS ",
      image: "/images/design.png",
      summary:
        "Guide to build a portfolio which is different and unique with design and little bit animations.",
      link: "https://dev.to/codebucks/build-a-stunning-portfolio-with-react-js-p1",
    },
  ];

  return (
    <section id="resources">
      <h2>Resources</h2>
      {resources.map((resource, index) => (
        <div key={index} className="resource">
          <img src={resource.image} alt={resource.title} />
          <div>
            <h3>{resource.title}</h3>
            <p>{resource.summary}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              View Resource
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

// Developer Setup Section
const DeveloperSetup = () => (
  <section id="developer-setup">
    <h2>Developer Setup</h2>
    <div>
      <h3>VS Code Setup</h3>
      <ul>
        <li>Theme: One Dark Pro</li>
        <li>
          Extensions:
          <ul>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>GitLens</li>
            <li>Docker</li>
            <li>Rainbow Brackets</li>
          </ul>
        </li>
        <li>
          Custom Settings:
          <ul>
            <li>Auto Save: onFocusChange</li>
            <li>Format On Save: enabled</li>
            <li>Tab Size: 2 spaces</li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <h3>Terminal Setup</h3>
      <ul>
        <li>Oh My Zsh with Powerlevel10k theme</li>
        <li>Custom aliases for git and docker commands</li>
        <li>iTerm2 with split panes configuration</li>
        <li>Node Version Manager (nvm)</li>
      </ul>
    </div>
    <div>
      <h3>Preferred Editor Font</h3>
      <ul>
        <li>Primary: JetBrains Mono</li>
        <li>Fallback: Fira Code</li>
        <li>Features: Ligatures enabled</li>
        <li>Size: 14px</li>
      </ul>
    </div>
  </section>
);

// Main App Component
function App() {
  return (
    <div className="App">
      <BasicInfo />
      <WorkExperience />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </div>
  );
}

export default App;
