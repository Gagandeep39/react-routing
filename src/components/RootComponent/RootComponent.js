import React, { Component } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';

export default class RootComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className='row'>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
