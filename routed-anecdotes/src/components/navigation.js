import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const style = {
    backgroundColor: 'lightgrey',
    color: 'white',
    textTransform: 'uppercase',
    padding: '0.66rem'
  };
  const activeStyle = {
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: 'black'
  };
  return (
    <div style={style}>
      <NavLink activeStyle={activeStyle} exact to="/anecdotes">
        anecdotes
      </NavLink>
      &nbsp;
      <NavLink activeStyle={activeStyle} to="/new">
        create new
      </NavLink>
      &nbsp;
      <NavLink activeStyle={activeStyle} to="/about">
        about
      </NavLink>
      &nbsp;
    </div>
  );
};

export default Menu;
