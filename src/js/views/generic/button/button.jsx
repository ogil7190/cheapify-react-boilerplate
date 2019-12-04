import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/*
    * @Auth OGIL > Kalra
    * sizes of the button are small medium large or custom
    * body-type is filled or lined
    * action-type Primary (lined) or Secondary(filled) which changes the body type
*/
export const Button = ( props ) => {
    const size = props.size;
    const bodyType = props.bodyType;
    const label = props.label;

    const classes = classnames( 'view-generic-button__container', { 'view-generic-button--small': 'small' === size }, {'view-generic-button--lined': 'lined' === bodyType } );
    
    return <div className={classes}>
        <span>{label}</span>
    </div>;
};

Button.proptypes = {
    size: PropTypes.string,
};
