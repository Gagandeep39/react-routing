import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ServicesComponent extends Component {
  render() {
    return (
      <div className='col d-flex justify-content-center'>
        <h1>
          You chose <span className='badge badge-primary'>Services</span>
        </h1>
      </div>
    );
  }
}

export default ServicesComponent;
