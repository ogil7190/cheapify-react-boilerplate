import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const CircularPreloader = ( props ) => {
    const preloaderClass = classnames( 'view-circular-preloader',
    props.size ? `view-circular-preloader--${props.size}`:null,
    props.theme ? `view-circular-preloader--${props.theme}`:null
    );
    return (
        <div class={preloaderClass}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

CircularPreloader.PropTypes={
    size: PropTypes.string,
    theme: PropTypes.string
};

CircularPreloader.defaultProps={
    size: 'medium',
    theme: 'light'
};

