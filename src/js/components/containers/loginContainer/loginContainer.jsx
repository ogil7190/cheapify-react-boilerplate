import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { CircularPreloader } from 'views/generic/circularPreloader';
import { LoginView } from 'views/LoginView';


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

class LoginContainer extends React.Component {

    /**
     * @param {object} props - props
     */
    constructor( props ) {
		log.debug( 'LoginContainer.constructor()' );

        super( props );

        // bind methods to this
		this.__bind();

        // component state
        this.state = {

        };
	}


    /**
     * @desc bind class methods to current instance
     */
    __bind() {
        log.debug( 'LoginContainer.bind()' );
    }

     /**
     * @desc Render a React view component
     */
    render() {
        log.debug( 'LoginContainer.render()' );

		return (
            <LoginView
                { ...this.props }
                { ...this.state }
            />
        );
    }
}
