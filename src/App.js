import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Timeline from './Timeline';
import Badges from './Badges';

const Header = (props) => (
  <div>
    <nav className="navbar navbar-light bg-inherit">
      <NavLink className="nav-link" to="" exact activeClassName="active">About</NavLink>
      <NavLink className="nav-link" to="/Timeline" activeClassName="active">Testimonials</NavLink>
      <NavLink className="nav-link" to="/Badges" activeClassName="active">Badges</NavLink>
    </nav>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container mt-2">
            <Route exact path="/" component={Home} />
            <Route path="/Timeline" component={Timeline} />
            <Route path="/Badges" component={Badges} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
