import React from 'react';

function Nav(props) {
  const tabs = ['About', 'Work', 'Contact'];

  return (
    <header>
      <h1>
        <a href="#/">My Portfolio</a>
      </h1>
      <nav>
        <ul>
          {tabs.map(tab => (
            <li 
              key={tab}
              className={props.currentPage === tab ? 'header-active' : undefined}
            >
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'active-category' : undefined
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;