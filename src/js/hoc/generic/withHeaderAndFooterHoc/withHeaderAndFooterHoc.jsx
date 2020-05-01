import React, { Fragment } from 'react';
import { SiteHeaderView } from 'views/SiteHeaderView';
import { get } from 'lodash';

export const withHeaderAndFooterHoc = ( Component ) => {

    class WithHeaderAndFooterHoc extends React.Component {
        constructor( props ) {
            super( props );
            this.state = {

            };
        }
        render() {
            console.log( this.props );
            const showHeader = get( this.props, 'showHeader', true );
            const showFooter = get( this.props, 'showFooter', true );
            return (
                <Fragment>
                   { showHeader && <SiteHeaderView/> }
                    <Component/>
                </Fragment>
                
            );
        }
    }
    return WithHeaderAndFooterHoc;
};

// export const withHeaderAndFooterHoc = withHeaderAndFooterHoc;

 
