import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ links }) {
  return (
    links.map(path => <NavLink to={path.to} key={path.name}>{path.name}</NavLink>)
  );
}

export default Nav;
