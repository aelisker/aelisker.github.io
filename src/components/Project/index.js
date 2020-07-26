import React from 'react';

function Project(props) {
  const { name, subtitle, repoUrl, deployedUrl, imageFileName } = props;
  return (
    <div
      className="service-grid-item"
      style={{
        backgroundImage: `url("/images/${imageFileName}")`,
        zIndex: 0
      }}
    >
      
      <div className="grid-text active">
        <h3>{name}<a href={repoUrl} /></h3>
        <h4>{subtitle}</h4>
      </div>
    </div>
  )
}

export default Project;