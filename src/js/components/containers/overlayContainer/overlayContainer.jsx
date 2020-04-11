import React from 'react';
import { overlayView as OverlayView } from 'views/generic/overlayView';
import { MessageBus } from 'services/MessageBus';
import { OPEN_OVERLAY } from 'constants/messageBusEvents';

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

class _overlayContainer extends React.Component {

    /**
     * @param {object} props - props
     */
    constructor( props ) {

        super( props );

        // bind methods to this
        this.__bind();

        // component state
        this.state = {
            hidden: true
        };
	}


    /**
     * @desc bind class methods to current instance
     */
    __bind() {
        this.method = this.method.bind( this );
        this.closeOverlay = this.closeOverlay.bind( this );
    }

    method( _payload_ ) {
        this.setState( {
            hidden: false,
            component: _payload_.component,
            componentData: _payload_.componentData
        } );
    }

    closeOverlay() {
        this.setState( {
            hidden: true
        } );
    }

    componentDidMount() {
        MessageBus.on( OPEN_OVERLAY, this.method );
    }

     /**
     * @desc Render a React view component
     */
    render() {
        const _View = this.state.component;
		return ( !this.state.hidden &&
            <OverlayView
                closeOverlay = { this.closeOverlay }
            >
                <_View
                    { ...this.state.componentData }
                />
            </OverlayView>
        );
    }

    componentWillUnmount() {
        MessageBus.off( OPEN_OVERLAY, this.method );
    }
}

export const OverlayContainer = _overlayContainer;
