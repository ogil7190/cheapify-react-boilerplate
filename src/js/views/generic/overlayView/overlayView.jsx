import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { MdClose } from 'react-icons/md';
import { Button } from 'views/generic/button';

/*
    * @Auth OGIL > Kalra
    * sizes of the button are small medium large or custom
    * body-type is filled or lined
    * action-type Primary (lined) or Secondary(filled) which changes the body type
*/
export const overlayView = ( props ) => {

    const overlayClasses = classnames( 'view-generic-overlay', props.classnames );

    return (
        <div className = 'view-generic-overlay'>
            <div className="view-generic-overlay__container">
                <div className="view-generic-overlay__container__content">
                    {
                        props.children
                    }
                </div>
                <div className="view-generic-overlay__container__close">
                        <MdClose size = '40' onClick = { props.closeOverlay } color='white' />
                </div>
            </div>
        </div>
    );
};
