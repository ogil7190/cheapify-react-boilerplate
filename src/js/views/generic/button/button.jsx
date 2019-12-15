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
    
    /* If there is no second class in ternary operator ( ? : ) then use AND operator */
    const buttonClasses = classnames( 'view-generic-button', props.className,
        props.bodyType && `view-generic-button--${props.bodyType}`,
        props.size && `view-generic-button--${props.size}`,
        props.color && `view-generic-button--${props.bodyType}--${props.color}`,
        props.disabled && 'view-generic-button--disabled',
        props.withoutMargin && 'view-generic-button--without-margin',
        'left' === props.iconPosition &&  'view-generic-button__icon--left',
        props.changeOnHover && !props.disabled && `view-generic-button__change-${props.bodyType}-on-hover`
    );

    const labelClasses = classnames( 'view-generic-button__label', props.labelClass,
        props.size && `view-generic-button__label--${props.size}`,
        props.labelColor && `view-generic-button__label--${props.labelColor}`
    );

    const iconClasses = classnames( 'view-generic-button__icon',
        props.icon && `view-generic-button__icon--${props.size}`
    );

    const buttonHolderClasses = classnames( 'view-generic-button__holder',
        'left' === props.iconPosition &&  'view-generic-button__holder--left'
    );

    const handleClick = () => {
        if( !props.disabled ) {
            props.onClick();
        }
    };
    
    return (
        <button
            className={ buttonClasses }
            onClick={ handleClick }
        >
        {
            props.loading ?
            <CircularPreloader size={props.size} theme={'filled' === props.bodyType ? 'light' : 'dark' } /> :
            <div className={buttonHolderClasses}>
                <span className={labelClasses}>{props.label}</span>
                {
                    props.icon && <props.icon className={ iconClasses } onClick = { props.disabled ? noop : props.onIconClick }/>
                }
            </div>
        }
         </button>
    );
};

Button.defaultProps = {
    size: 'small',
    bodyType: 'filled',
    disabled: false,
    onClick: noop,
    loading: false,
    icon: null,
    iconPosition: 'right',
    onIconClick: noop,
    changeOnHover: false
};

Button.propTypes = {
    size: PropTypes.string,
    bodyType: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.element,
    onIconClick: PropTypes.func,
    iconPosition: PropTypes.string,
    changeOnHover: PropTypes.bool
};
