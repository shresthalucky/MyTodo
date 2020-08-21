import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ links }) {
  return (
    <ul className="nav">
      {links.map(path => {
        return (
          <li key={path.name}>
            <NavLink to={path.to} className="nav__link" exact>{path.name}</NavLink>
          </li>
        )
      })}
    </ul>
  );
}

export default Nav;
