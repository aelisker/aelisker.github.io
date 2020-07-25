import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../pages/about';
import Work from '../pages/work';
import Contact from '../pages/contact';

function Header() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return(
          <About />
        );
      case 'Work':
        return(
          <Work />
        );
      case 'Contact':
        return(
          <Contact />
        );
      default:
        return(
          <About />
        );
    }
  };

  return(
    <div>
      <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Nav>
      <div>
        {renderPage()}
      </div>
    </div>
  );
};

export default Header;