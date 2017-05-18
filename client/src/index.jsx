import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

import Home from './components/Home.jsx';
import Container from './components/Container.jsx';
import Results from './components/Results.jsx';
import Survey from './components/Survey.jsx';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='results' component={Results} />
        </Route>
      </Router>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
