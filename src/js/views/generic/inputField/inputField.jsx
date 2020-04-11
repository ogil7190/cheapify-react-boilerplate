import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';

/**
 * @Auth Aman Kalra > OGIL
 * @desc An input field generic component which can be used in various views.
 * can be disabled, can have a label
 * exposes a custom render function for icon or can pass icon component directly as icon prop but priority is given to render
 */
export const InputField = ( props ) => {
    const mainClasses = classnames( 'view-generic-input-field',
        props.withoutMargin && 'view-generic-input-field--without-margin'
    );
    const inputContainerClasses = classnames( 'view-generic-input-field__container',
        'left' === props.iconPosition &&  'view-generic-input-field__icon--left' );
    const inputClasses = classnames( 'view-generic-input-field__input', true === props.disabled && 'view-generic-input-field__input--disabled' );
    const iconClasses = classnames( props.icon && 'view-generic-input-field__input__icon' );
    const labelClasses = classnames( props.label && 'view-generic-input-field__label' );

    return (
        <div className = { mainClasses }>
            {
                props.label &&
                <div className = { labelClasses }>{ props.label }</div>
            }
            <div className = { inputContainerClasses }>
                <input
                    placeholder = { props.placeholder }
                    className = { inputClasses }
                    id = { props.id }
                    type = { props.type }
                    disabled = { props.disabled }
                    onChange = { ( event ) => props.onChange( event.target.value ) }
                />
                {
                    props.renderIcon && props.renderIcon() /* render icon as you want */
                }
                {
                    !props.renderIcon && props.icon && <props.icon className={ iconClasses } onClick = { props.disabled ? noop : props.onIconClick }/>
                }
            </div>
        </div>
    );
};

InputField.defaultProps = {
    type: 'text',
    iconPosition: 'right',
    onIconClick: noop,
    onChange: noop,
    disabled: false,
    withoutMargin: false,
    renderIcon: null /* function but dont keep as noop */
};

InputField.proptypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    onIconClick: PropTypes.func,
    iconPosition: PropTypes.string,
    disabled: PropTypes.bool,
    withoutMargin: PropTypes.bool,
    renderIcon: PropTypes.func
};

