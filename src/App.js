import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/reset.css'
import './index.css';
import Index from './containers/index';
import FavoritePost from './containers/favorite-post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/favorite-post" component={FavoritePost} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
