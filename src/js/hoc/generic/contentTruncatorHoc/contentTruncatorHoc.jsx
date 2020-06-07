import React from 'react';

// import default view
import { contentTruncatorView } from './contentTruncatorView';

/**
 * @desc A Higher-Order-Component to enhance functionality of `Component`
 * Wrap the component with this Hoc to render a given number of children and hide others.
 */

const contentTruncatorHoc = ( Component = contentTruncatorView ) => {
    class ContentTruncatorHoc extends React.Component {

        constructor( props ) {
            super( props );
            this.state = {
                isOpen: false
            };
            this.__bind();
        }
        __bind() {
            this.handleToggle = this.handleToggle.bind( this );
        }
        handleToggle() {
            console.log( 'contentTruncatorHoc.handleToggle()' );
            this.setState( {
                isOpen: !this.state.isOpen
            } );
        }
        render() {
            console.log( 'contentTruncatorHoc.render()' );
            return(
                <Component
                    {...this.props}
                    isOpen = {this.state.isOpen}
                    handleToggle = {this.handleToggle}
                />
            );
        }

    }

ContentTruncatorHoc.defaultProps = {

};

ContentTruncatorHoc.propTypes = {

};

return ContentTruncatorHoc;

};

// export with default view
export const ContentTruncatorHoc = contentTruncatorHoc();
