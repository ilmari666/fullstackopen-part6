import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
  const activeStyle = {
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: 'black'
  };
  return (
    <Menu>
      <Menu.Item link>
        <NavLink activeStyle={activeStyle} exact to="/anecdotes">
          anecdotes
        </NavLink>
      </Menu.Item>
      <Menu.Item link>
        <NavLink activeStyle={activeStyle} to="/new">
          create new
        </NavLink>
      </Menu.Item>
      <Menu.Item link>
        <NavLink activeStyle={activeStyle} to="/about">
          about
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
