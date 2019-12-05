import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { CircularPreloader } from 'views/generic/circularPreloader';

/*
    * @Auth OGIL > Kalra
    * sizes of the button are small medium large or custom
    * body-type is filled or lined
    * action-type Primary (lined) or Secondary(filled) which changes the body type
*/
export const Button = ( props ) => {
    const buttonClass = classnames( 'view-generic-button', props.className,
        props.bodyType ? `view-generic-button--${props.bodyType}`: null,
        props.size ? `view-generic-button--${props.size}`: null,
        props.disabled ? 'view-generic-button--disabled':null,
    );

    const labelClasses = classnames( 'view-generic-button__label',
        props.size ? `view-generic-button__label--${props.size}`: null,
    );
    
    return <button className={buttonClass}>
        {
            props.loading ? <div>Loading <CircularPreloader size={props.size} theme={'filled' === props.bodyType ? 'light' : 'dark' } /> </div> : <span className={labelClasses}>{props.label}</span>
        }
    </button>;
};

Button.proptypes = {
    size: PropTypes.string,
};

Button.defaultProps = {
    size: 'medium',
    bodyType: 'filled',
    disabled: false,
    onClick: noop,
    loading: false,
    icon: ''
};
