import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Business from './Components/Business';
import Science from './Components/Science';
import Tech from './Components/Tech';
import NoMatch from './Components/NoMatch';

function App(props) {
  return (
    <Router>
      {props.children}
      <div className="App">
        <h1>NEWS</h1>
        <nav>
          <ul>
            <li><Link className="link" to="/business">Business</Link></li>
            <li><Link className="link" to="/science">Science</Link></li>
            <li><Link className="link" to="/tech">Tech</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/science">
            <Science />
          </Route>

          <Route path="/tech">
            <Tech />
          </Route>

          <Route>
            <NoMatch />
          </Route>

          <Route path="">
            <Tech />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
