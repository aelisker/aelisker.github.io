import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer'
import About from './components/About';
import Work from './components/Work'
import './css/App.css';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        workSelected={workSelected}
        setWorkSelected={setWorkSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <Work></Work>
        )} */}
        {aboutSelected &&
          <About></About>
        }
        {workSelected &&
          <Work></Work>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
