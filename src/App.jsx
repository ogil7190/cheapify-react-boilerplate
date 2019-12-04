import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from 'components/hello-world/index.js';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }
  
  render() {
    return(
    <>
      <Link to={'/demo'}> Click to Demo</Link>
      <HelloWorld title="Hello from React webpack" />
    </>
    );
  }
}

export default hot( App );
