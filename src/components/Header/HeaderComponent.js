import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

const HeaderComponent = (props) => {
  return (
    <nav class='navbar navbar-expand-sm bg-primary navbar-dark'>
      <ul class='navbar-nav'>
        <li class='nav-item active'>
          <a class='nav-link' href='#'>
            Home
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            Projects
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            Services
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
