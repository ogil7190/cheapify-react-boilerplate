import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';

/**
 *@Auth Ogil7190 && Aman Kalra
 * @desc This view is used to render the text across the application.
 */
export const Text = ( props ) => {

    // const _tagName = props.tagName ? props.tagName : getTagName( level );
    const mainClasses = classnames( 'view-generic-text' );
    return (
        <div className = { mainClasses }>
            <p> { props.label } </p>
        </div>
    );
};

Text.proptypes = {
    type: PropTypes.string,
    iconPosition: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool
};

Text.defaultProps = {
    required: false,
    type: 'text',
    onClick: noop,
    iconPosition: 'right',
    disabled: false
};

