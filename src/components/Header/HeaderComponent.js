import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { NavLink } from "react-router-dom";

const HeaderComponent = (props) => {
  return (
    <nav className='navbar navbar-expand-sm bg-primary navbar-dark'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink exact activeClassName='active'  className='nav-link' to='/'>
            Home
          </NavLink >
        </li>
        <li class='nav-item'>
          <NavLink activeClassName='active' className='nav-link' to='/projects'>
            Projects
          </NavLink >
        </li>
        <li class='nav-item'>
          <NavLink activeClassName='active'  className='nav-link' to='/services'>
            Services
          </NavLink >
        </li>
        <li class='nav-item'>
          <NavLink  activeClassName='active'  className='nav-link' to='/contacts'>
            Contacts
          </NavLink >
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
