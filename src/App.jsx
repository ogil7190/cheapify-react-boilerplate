import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { withBrowserRouter } from 'hoc/generic/withBrowserRouter';
import { RouteManager } from 'router/routeManager';
import { DEBUG } from '../app-config';
class _App extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }
  
  render() {
    return(
      <RouteManager title='Cheapify' debug = {DEBUG} />
    );
  }
}

export const App = () => withBrowserRouter( hot( _App ) );
