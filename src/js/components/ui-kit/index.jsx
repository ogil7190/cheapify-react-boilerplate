import React from 'react';
import HelloWorld from 'views/hello-world';

export default class UIKit extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }

    render() {
        return(
            <HelloWorld { ...this.props } />
        );
    }
}
