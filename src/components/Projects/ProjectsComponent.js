import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ProjectsComponent extends Component {
  render() {
    return (
      <div className='col d-flex justify-content-center'>
        <h1>You chose <span class='badge badge-primary'>Projects</span></h1>
      </div>
    );
  }
}

export default ProjectsComponent;
