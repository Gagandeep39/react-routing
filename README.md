# React JS Routing

## Deployment
Test the application working at https://gagandeep39.github.io/react-routing/

## Theory 
- Allows Creation of multiple pages in an App
- Requires `react-router-dom` package

## Steps

### BrowserRouter
- All components where routing is supprted must be enclosed in `BrowserRouter`
  ```js
  // [index.js]
  import { BrowserRouter} from 'react-router-dom';
  <BrowserRouter >
    <App />
  </BrowserRouter>
  ```
- `BrowserRouter` can contain only single child element which must be div
- All childers must be defined under Div
- All routes are defined in the following manner
  ```js
  import { Route, Switch } from 'react-router-dom';

      <RootComponent></RootComponent>
      <Switch>
        <Route exact path={'/'} component={HomeComponent} />
        <Route path={'/abc'} component={AbcComponent} />
      </Switch>
  ```
- Here root component is a custom component with a nav bar (Nav bar can also be created in the sam component where routes are declared)
- All routes must be specified in `Switch` tag
- `exact` keyword is used as `/` is present in every other routes also 

### Root Component 
  ```js
  <div>
    <HeaderComponent />
    <div className='row'>
      <div className='col d-flex justify-content-center'>
        {this.props.children}
      </div>
    </div>
  </div>
  ```
- Here Header component provides nagation UI
- All Route content are loaded using `this.props.children`

### Header Component
- Contains navigation
  ```js
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
        </ul>
      </nav>
    );
  };
  ```
- NavLink allows us to switch routes
- `activeClassName` allows changing of layout of active link navigation item