import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './comp/Home';
import Login from './comp/Login'
import AboutUs from './comp/AboutUs'
import Todos from './comp/Todos'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav nav-bar">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Todos'}>Todos</Link></li>
              <li><Link to={'/AboutUsPage'}>About us</Link></li>
              <li><Link to={'/Login'}>Login</Link></li>
            </ul>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Todos' component={Todos} />
              <Route exact path='/AboutUsPage' component={AboutUs} />
              <Route exact path='/Login' component={Login} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
