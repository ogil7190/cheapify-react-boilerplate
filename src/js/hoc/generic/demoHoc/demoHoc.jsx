import React from 'react';

const demoHoc = ( Component ) => {
    class DemoHoc extends React.Component {
        constructor( props ) {
            super( props );
            this.state = {

            };
        }
        render() {
            console.log( 'demoHoc.render()' );
            return (
                <div className = 'ui-demoHoc'>
                    <Component
                        {...this.props}
                    />
                    <p>This is an example of { this.props.label }</p>
                </div>
            );

        }
    }
    return DemoHoc;
};

// export with default view
export { demoHoc };


