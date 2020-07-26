import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const HomeComponent = (props) => {
  return (
    <div  className='col d-flex justify-content-center'>
      <h1>You chose <span class="badge badge-primary">Home</span></h1>
    </div>
  );
}

export default HomeComponent;
