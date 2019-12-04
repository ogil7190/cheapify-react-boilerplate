import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { withRouter } from 'hoc/withRouter';

const AppWithRouter = () => withRouter( App );

ReactDOM.render( <AppWithRouter />, document.getElementById( 'app' ) );
