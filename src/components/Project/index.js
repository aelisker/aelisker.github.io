import React from 'react';
import { FaGithub, FaChrome } from 'react-icons/fa';

class GithubIcon extends React.Component {
  render() {
    return <h3><FaGithub/></h3>
  }
};

class ChromeIcon extends React.Component {
  render() {
    return <h3><FaChrome/></h3>
  }
};

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
      <a 
        href={repoUrl} 
        className="react-icon work-icon"
      ><GithubIcon/></a>

      {deployedUrl.length && 
        <a 
          href={deployedUrl} 
          className="react-icon work-icon"
        ><ChromeIcon/></a>
      }
      
      <div className="grid-text active">
        <h3>{' '}{name}</h3>
        <h4>{' '}{subtitle}</h4>
      </div>
    </div>
  )
}

export default Project;