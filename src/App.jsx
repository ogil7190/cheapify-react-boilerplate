import React, { Component } from 'react';
import { withBrowserRouterHoc } from 'hoc/generic/withBrowserRouterHoc';
import { RouteManager } from 'router/routeManager';
import { DEBUG } from '../app-config';
class _App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
    };

  }
  
  render() {
    return(
      <RouteManager title='Cheapify' debug = {DEBUG} />
    );
  }
}

export const App = () => withBrowserRouterHoc( _App );
