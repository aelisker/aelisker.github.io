import React from 'react';
import Hero from '../Hero';

function About() {
  return (
    <>
      <Hero></Hero>
      <section id="about" className="about">
        <div className="flex-row">
          <div className="section-title">
            <h2>
              About Me
          </h2>
          </div>
          <div className="content flex-row">
            <p className="about-text">
            Systems Support Engineer and Full Stack Developer with a demonstrated history of working in the Information Technology industry. Graduate of the Coding Booting UC Berkeley Extension. Business Administration with a Bachelor of Science (BS) focused in Minor in Computer and Information Technology from University of Oregon. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;