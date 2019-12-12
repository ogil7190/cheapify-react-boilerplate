import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * @Auth Aman Kalra > OGIL
 * @desc An generic component to render various views/components in an equispaced manner
 * Expected Props:
 * 1: direction (can be vertical or horizontal) -> based on the direction, item alignment will be decided. (By default, horizontal has been set)
 */

 export const EquiSpacedView = ( props ) => {
    const classname = classnames( 'ui-equi-spaced-view', props.className,
      props.direction && `ui-equi-spaced-view--${props.direction}`
    );
    return (
        <div className = { classname }>
           { React.Children.map( props.children, ( child, index ) => <div key={ index } className='ui-equi-spaced-view__item'> { React.cloneElement( child ) }</div> ) }
        </div>
    );
 };

 EquiSpacedView.defaultProps = {
      direction: 'horizontal',
 };

 EquiSpacedView.propTypes = {
   direction: PropTypes.string
 };

