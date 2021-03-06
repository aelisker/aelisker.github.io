import React from 'react';
import Background from '../../assets/images/station-full-min.jpg'
//https://www.npmjs.com/package/react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

class GithubIcon extends React.Component {
  render() {
    return <h3><FaGithub/></h3>
  }
}

class LinkedInIcon extends React.Component {
  render() {
    return <h3><FaLinkedin/></h3>
  }
}

class EmailIcon extends React.Component {
  render() {
    return <h3><FaEnvelope/></h3>
  }
}

function Nav() {
  return (
    <footer 
      className="page-footer"
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
      <nav>
        <ul>
          <li>
            <a 
              href="https://github.com/aelisker" 
              className="hover-item react-icon"
            ><GithubIcon/></a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/aelisker/" 
              className="hover-item react-icon"
            ><LinkedInIcon/></a>
          </li>
          <li>
            <a 
              href="mailto:alisker@protonmail.com" 
              className="hover-item react-icon"
            ><EmailIcon/></a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Nav;