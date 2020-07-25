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
          <li className={aboutSelected === true ? 'header-active' : undefined}>
            <a
              onClick={() => {
                setAboutSelected(true);
                setWorkSelected(false);
                setContactSelected(false);
              }}
              href="#about-me" 
              className={aboutSelected && 'active-category'}
            >About Me</a>
          </li>
          <li className={workSelected === true ? 'header-active' : undefined}>
            <a
              onClick={() => {
                setAboutSelected(false);
                setWorkSelected(true);
                setContactSelected(false);
              }}
              href="#my-work" 
              className={workSelected && 'active-category'}
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
              className={contactSelected && 'active-category'}
            >Get In Touch</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;