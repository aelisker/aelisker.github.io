import React from 'react';
//https://www.npmjs.com/package/react-icons
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

class GithubIcon extends React.Component {
  render() {
    return <h3><FaGithub/></h3>
  }
}

class LinkedIn extends React.Component {
  render() {
    return <h3><FaLinkedin/></h3>
  }
}

class DocumentIcon extends React.Component {
  render() {
    return <h3><FaFileDownload/></h3>
  }
}

function Nav() {
  return (
    <footer className="page-footer">
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
              href="https://linkedin.com" 
              className="hover-item react-icon"
            ><LinkedIn/></a>
          </li>
          <li>
            <a 
              onClick={() => {
                alert(`Don't forget to add a download!`);
              }}
              href="#my-work" 
              className="hover-item react-icon"
            ><DocumentIcon/></a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Nav;