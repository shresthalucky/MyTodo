import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ links }) {
  return (
    <ul className="nav">
      {links.map(path => {
        return (
          <li>
            <NavLink to={path.to} key={path.name} className="nav__link" exact>{path.name}</NavLink>
          </li>
        )
      })}
    </ul>
  );
}

export default Nav;
