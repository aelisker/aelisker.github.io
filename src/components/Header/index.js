import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../pages/about';
import Work from '../pages/work';
import Resume from '../pages/resume';
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
      case 'Resume':
        return(
          <Resume />
        );
      // case 'Contact':
      //   return(
      //     <Contact />
      //   );
      default:
        return(
          <About />
        );
    }
  };

  return(
    <div className="content-wrap">
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