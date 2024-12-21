import React from "react";

const Resources = () => {
  const resources = [
    {
      title: "How to Build a Portfolio Website with React ",
      image: "https://picsum.photos/id/8/100",
      summary: "Comprehensive guide to create a developer portfolio.",
      link: "https://www.freecodecamp.org/news/build-portfolio-website-react/",
    },
    {
      title: "Build a Stunning Portfolio website with React JS ",
      image: "https://picsum.photos/id/1/100",
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

export default Resources;
