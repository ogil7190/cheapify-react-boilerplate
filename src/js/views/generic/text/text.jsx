import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';

/**
 * @Auth Aman Kalra > OGIL
 * @desc This dumb component is used to render the text across the application.
 * Expected Props:
 * 1: label (this is the text to be printed through the view.)
 *
 * Optional Props:
 * 1: tagName (you can also send the tag name directly through props. )
 */

export const Text = ( props ) => {

    const mainClasses = classnames( 'view-text', props.className );
    return (
        <div className = { mainClasses }>
            <props.tagName> { props.label } </props.tagName>
        </div>
    );
};

Text.proptypes = {
    tagname: PropTypes.string,
};

Text.defaultProps = {
    tagName: 'p',
    onClick: noop,
};

