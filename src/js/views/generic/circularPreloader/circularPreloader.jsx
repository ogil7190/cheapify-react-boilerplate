import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const CircularPreloader = ( props ) => {
    const preloaderClass = classnames( 'view-circular-preloader',
        !props.amount && props.size && `view-circular-preloader--${props.size}`, // only set size class if amount is NOT present
        props.theme && `view-circular-preloader--${props.theme}`,
        props.amount && 'view-circular-preloader--amount'
    );

    return (
        <div className = {preloaderClass} >
            <div className="spinner" style={ props.amount && { width: props.amount, height: props.amount } } />
        </div>
    );
};

CircularPreloader.propTypes = {
    size: PropTypes.string,
    theme: PropTypes.string
};

CircularPreloader.defaultProps={
    size: 'medium',
    theme: 'light',
    amount: null
};

