import React from 'react';

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    workSelected,
    setWorkSelected,
    contactSelected,
    setContactSelected
  } = props;

  return (
    <header>
      <h1>
        <a href="#/">My Portfolio</a>
      </h1>
      <nav>
        <ul>
          <li className={aboutSelected && 'header-active'}>
            <a 
              onClick={() => {
                setAboutSelected(true);
                setWorkSelected(false);
                setContactSelected(false);
              }}
              href="#about-me" 
              className="hover-item"
            >About Me</a>
          </li>
          <li className={workSelected && 'header-active'}>
            <a 
              onClick={() => {
                setAboutSelected(false);
                setWorkSelected(true);
                setContactSelected(false);
              }}
              href="#my-work" 
              className="hover-item"
            >My Work</a>
          </li>
          <li className={contactSelected && 'header-active'}>
            <a 
              onClick={() => {
                setAboutSelected(false);
                setWorkSelected(false);
                setContactSelected(true);
              }}
              href="#contact-me" 
              className="hover-item"
            >Get In Touch</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;