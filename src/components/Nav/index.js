import React from 'react';
import Background from '../../assets/images/station-full-min.jpg'

function Nav(props) {
  const tabs = [
    {name:'About Me', id: 'About'}, 
    {name: 'My Work', id: 'Work'},
    {name: 'Skills', id: 'Resume'},
    // {name: 'Reach Out', id: 'Contact'}
  ];

  return (
    <header
      style={{
        backgroundImage: `url(${Background})`
      }}>
      <h1>
        My Portfolio
      </h1>
      <nav>
        <ul>
          {tabs.map(({name, id}) => (
            <li 
              key={id}
              className={props.currentPage === id ? 'header-active' : undefined}
            >
              <a
                href={'#' + id.toLowerCase()}
                onClick={() => props.handlePageChange(id)}
                className={
                  props.currentPage === id ? 'active-category' : undefined
                }
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;