import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { withBrowserRouter } from 'hoc/generic/withBrowserRouter';
import { RouteManager } from 'router/routeManager';
class _App extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }
  
  render() {
    return(
      <RouteManager title='Cheapify' />
    );
  }
}

export const App = () => withBrowserRouter( hot( _App ) );
