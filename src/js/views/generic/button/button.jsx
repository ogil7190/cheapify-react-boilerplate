import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { CircularPreloader } from 'views/generic/circularPreloader';
import { FaFacebook } from 'react-icons/fa';

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
        'left' === props.iconPosition ?  'view-generic-button__icon--left' : null
    );

    const labelClasses = classnames( 'view-generic-button__label',
        props.size ? `view-generic-button__label--${props.size}`: null,
    );
    const iconClasses = classnames( props.icon ? 'view-generic-button__icon' :null,
        props.size ? `view-generic-button__icon--${props.size}`: null,
    );
    
    return (
        <button className={buttonClass} onClick={ props.disabled ? noop : props.onClick }>
        {
            props.loading ?
            <CircularPreloader size={props.size} theme={'filled' === props.bodyType ? 'light' : 'dark' } /> :
            <span className={labelClasses}>{props.label}</span>
        }
        {
            props.icon && <FaFacebook className={ iconClasses } onClick = { props.disabled ? noop : props.onIconClick }/>
        }
         </button>
    );
};

Button.propTypes = {
    size: PropTypes.string,
};

Button.defaultProps = {
    size: 'medium',
    bodyType: 'filled',
    disabled: false,
    onClick: noop,
    loading: false,
    icon: '',
    iconPosition: 'right',
};
