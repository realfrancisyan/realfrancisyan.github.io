import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './styles/reset.css'
import './index.css';
import Index from './containers/index';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
