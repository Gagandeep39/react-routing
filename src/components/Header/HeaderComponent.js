import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Link } from "react-router-dom";

const HeaderComponent = (props) => {
  return (
    <nav class='navbar navbar-expand-sm bg-primary navbar-dark'>
      <ul class='navbar-nav'>
        <li class='nav-item active'>
          <Link  class='nav-link' to='/home'>
            Home
          </Link >
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/projects'>
            Projects
          </Link >
        </li>
        <li class='nav-item'>
          <Link  class='nav-link' to='/services'>
            Services
          </Link >
        </li>
        <li class='nav-item'>
          <Link  class='nav-link' to='/contacts'>
            Contacts
          </Link >
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
