import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import { GoSearch } from 'react-icons/go';

/**
 *@Auth Ogil7190 && Aman Kalra
 * @desc An input field generic component which can be used in various views.
 */
export const InputField = ( props ) => {
    const mainClasses = classnames( 'view-generic-input-field' );
    const inputContainerClasses = classnames( 'view-generic-input-field__container',
        'left' === props.iconPosition ?  'view-generic-input-field__icon--left' : null );
    const inputClasses = classnames( 'view-generic-input-field__input' );
    const iconClasses = classnames( props.icon ? 'view-generic-input-field__input__icon' :null );
    const labelClasses = classnames( props.label ? 'view-generic-input-field__label' :null );

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
                    required = {props.required}
                />
                {
                    props.icon && <GoSearch className={ iconClasses } onClick = { props.disabled ? noop : props.onIconClick }/>
                }
            </div>
        </div>
    );
};

InputField.proptypes = {
    type: PropTypes.string,
    iconPosition: PropTypes.string,
    required: PropTypes.bool
};

InputField.defaultProps = {
    required: false,
    type: 'text',
    onClick: noop,
    iconPosition: 'right'
};

