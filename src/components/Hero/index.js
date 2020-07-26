import React from 'react';
import Background from '../../assets/images/station-full.jpg'

function Hero() {
  return (
    <section 
      className="hero"
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
      <div className="hero-subtitle">
        <h2>Just the Beginning</h2>
      </div>
    </section>
  )
};

export default Hero;