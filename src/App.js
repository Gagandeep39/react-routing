import React from 'react';
import './App.css';
import RootComponent from './components/RootComponent/RootComponent';
import HomeComponent from './components/Home/HomeComponent'

function App() {
  return (
    <RootComponent>
      <HomeComponent />
    </RootComponent>
  );
}

export default App;
