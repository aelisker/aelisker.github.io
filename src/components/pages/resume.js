import React from 'react';
import Hero from '../Hero';
import { FaMdb } from 'react-icons/fa';

function Resume() {
  return (
    <>
      <Hero></Hero>
      <section id="about" className="about">
        <div className="flex-row">
          <div className="section-title">
            <h2>
              My Skills
            </h2>
          </div>
          <div className="content flex-row">
            <div className="mern">
              <p id="skill-writeup">
                Currently learning web development with a focus on the MERN stack. Starting with vanilla HTML and CSS, I've worked my way up from performing basic API GET requests to building my own RESTful API.
                Feel free to <a href='resume.txt' download>download my resume</a>.
              </p>
              <h1 className="mern-label">Front End Technologies</h1>
              <ul className="skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript / JQuery</li>
                <li>React.js</li>
                <li>Libraries like Bootstrap, Foundation</li>
              </ul>
              <h1 className="mern-label">Server Side</h1>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Apollo Server</li>
                <li>Hashed authentication through BCrypt, Passport.js</li>
              </ul>
              <h1 className="mern-label">Data</h1>
              <ul className="skill-list">
                <li>MySQL and Sequelize ORM</li>
                <li>MongoDB and Mongoose ORM</li>
                <li>JSON and JSON Web Tokens</li>
              </ul>
              <h1 className="mern-label">Browser Technology</h1>
              <ul className="skill-list">
                <li>Browser APIs like LocalStorage, Session Storage, IndexedDB</li>
                <li>Service Workers, manifest.json</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume;