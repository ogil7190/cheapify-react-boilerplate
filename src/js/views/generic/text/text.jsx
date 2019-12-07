import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';

/**
 * @Auth Ogil7190 && Aman Kalra
 * @desc This dumb component is used to render the text across the application.
 * Expected Props:
 * 1: label (this is the text to be printed through the view.)
 *
 * Optional Props:
 * 1: color (just send the color name and it will append on the tag's className.)
 * 2: tagName (you can also send the tag name directly through props. )
 * 3: bold (to indicate if the text needs to be printed as bold or not.)
 * 4: thin (to indicate if the text needs to be printed a thin.)
 * 4: underline (to indicate if the text needs underlining or not.)
 * 5: centerAligned (true if text needs to be aligned at center.)
 * 5: large (true if text needs to be printed in large size i.e. 28px.)
 * 5: extraLarge (true if text needs to be printed in very large size i.e. 34px.)
 */
export const Text = ( props ) => {

    const mainClasses = classnames( 'view-text',
            props.className,
            {
                [ `view-text--${props.color}` ]: props.color,
                'view-text--bold': props.bold,
                'view-text--ultra-bold': props.ultraBold,
                'view-text--thin': props.thin,
                'view-text--medium': props.medium,
                'view-text--underline': props.underline,
                'view-text--center': props.centerAligned,
                'view-text--large': props.large,
                'view-text--extra-large': props.extraLarge
            }
    );
    return (
        <div className = { mainClasses }>
            <props.tagName> { props.label } </props.tagName>
        </div>
    );
};

Text.proptypes = {
    tagname: PropTypes.string,
    bold: PropTypes.bool,
    ultraBold: PropTypes.bool,
    underline: PropTypes.bool,
    centerAligned: PropTypes.bool,
    extraLarge: PropTypes.bool,
};

Text.defaultProps = {
    tagName: 'p',      // default tagname will be p
    onClick: noop,
    bold: false,
    ultraBold: false,
    underline: false,
    centerAligned: false,
    extraLarge: false,
};

