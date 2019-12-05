import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Card = ( props ) => {
    const cardClasses = classnames( 'view-card',
        props.withoutPadding ? 'view-card view-card--without-padding' : null,
        props.withoutMargin? 'view-card view-card--without-margin' : null,
    );

    return (
        <div className={cardClasses}>
            {props.children}
        </div>
    );
};

Card.defaultProps = {

};

Card.propTypes = {
    withoutPadding: false,
    withoutMargin: false
};
