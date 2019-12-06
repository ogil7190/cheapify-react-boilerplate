import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';

/**
 *@Auth Ogil7190 && Aman Kalra
 * @desc An input field generic component which can be used in various views.
 */
export const InputField = ( props ) => {
    const inputClasses = classnames( 'view-generic-input-field',
        props.type ? `view-generic-input-field--${props.type}`:null,
        props.icon ? 'view-generic-input-field--icon' :null,
        props.placeholder ? 'view-generic-input-field--placeholder' :null
    );
    const wrapperClass = classnames( 'view-generic-input-field--wrapper' );

    const labelClasses = classnames( props.label ? 'view-generic-input-field--label' :null );
    return (
        <div className = { wrapperClass }>
            {
                props.label &&
                <span className = { labelClasses }>{ props.label }</span>
            }
            <input
                placeholder = { props.placeholder }
                className = { inputClasses }
                id = { props.id }
                type = { props.type }
                required = {props.required}
            />
        </div>
    );
};

InputField.proptypes = {
    type: PropTypes.string,
    required: PropTypes.bool
};

InputField.defaultProps = {
    required: false,
    type: 'text',
    disabled: false,
    onClick: noop,
};

