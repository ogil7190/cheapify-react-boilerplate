import React from 'react';
import { LoginView } from 'root/src/js/views/loginView';


/**
 * @Auth Aman Kalra > OGIL7190
 * @type {class}
 * @desc A React container/smart component to render a React presentational/dumb component (view).
 * @example
 * import { LoginContainer } from 'containers/LoginContainer';
 *
 * // render
 * <LoginContainer propName='propValue'/>
 */

class _LoginContainer extends React.Component {

    /**
     * @param {object} props - props
     */
    constructor( props ) {

        super( props );

        // bind methods to this
        this.__bind();

        // component state
        this.state = {
            activeView: 'LOGIN_VIEW'
        };
	}


    /**
     * @desc bind class methods to current instance
     */
    __bind() {
        this.actionHandler = this.actionHandler.bind( this );
    }

    actionHandler( actionType ) {
        switch( actionType ) {
            case 'FORGOT_PASSWORD': return this.setState( { activeView: 'FORGOT_PASSWORD' } );
            case 'LOGIN_VIEW': return this.setState( { activeView: 'LOGIN_VIEW' } );
        }
    }

     /**
     * @desc Render a React view component
     */
    render() {

		return (
            <LoginView
                rightWidget = { this.state.activeView }
                actionHandler = {this.actionHandler}
            />
        );
    }
}

export const LoginContainer = _LoginContainer;
