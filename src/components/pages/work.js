import React, { useState } from 'react';
import Project from '../Project';
import projects from '../../projects.json';

function Work() {
  const [projectList, setProjectList] = useState(projects);

  return (
    <section id="work" className="about">
      <div className="flex-row">
        <div className="section-title">
          <h2>
            My Work
          </h2>
        </div>
        <div className="content service-grid-wrapper">
          <div className="service-grid-container">
            {projectList.map((project) => {
              return (
                <Project
                  key={project.name}
                  name={project.name}
                  subtitle={project.subtitle}
                  deployedUrl={project.deployedUrl}
                  repoUrl={project.repoUrl}
                  imageFileName={project.imageFileName}
                >
                </Project>
              )
            })}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Work;