import React, { Component } from 'react';
import { withBrowserRouterHoc } from 'hoc/generic/withBrowserRouterHoc';
import { RouteManager } from 'router/routeManager';
import { DEBUG } from '../app-config';
import { OverlayContainer } from 'components/containers/overlayContainer';

class _App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
    };

  }
  
  render() {
    return(
      <div className='main-container'>
        <RouteManager title='demo' debug = {DEBUG} />
        <OverlayContainer />
      </div>
    );
  }
}

export const App = () => withBrowserRouterHoc( _App );
