import React from 'react';
import './App.css';
import HomeComponent from './components/Home/HomeComponent';
import ContactComponent from './components/Contact/ContactComponent';
import ProjectsComponent from './components/Projects/ProjectsComponent';
import ServicesComponent from './components/Services/ServicesComponent';
import { Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/Header/HeaderComponent';
import RootComponent from './components/RootComponent/RootComponent';

function App() {
  return (
    <div>
      <RootComponent></RootComponent>
      <Switch>
        <Route exact path={'/'} component={HomeComponent} />
        <Route path={'/contacts'} component={ContactComponent} />
        <Route path={'/projects'} component={ProjectsComponent} />
        <Route path={'/home'} component={HomeComponent} />
        <Route path={'/services'} component={ServicesComponent} />
      </Switch>
    </div>
  );
}

export default App;
