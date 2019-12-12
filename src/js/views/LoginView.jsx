import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'views/generic/button';


/**
 * @Auth Aman Kalra > OGIL
 * @desc An generic component to render various views/components in an equispaced manner
 * Expected Props:
 * 1: direction (can be vertical or horizontal) -> based on the direction, item alignment will be decided. (By default, horizontal has been set)
 */

 export const LoginView = ( props ) => {
    const classname = classnames( 'ui-login-view', props.className,
      props.direction && `ui-equi-spaced-view--${props.direction}`
    );
    return (
        <div>
        <div className = 'ui-login-view-header'>

        </div>

        <div className = { 'ui-login-view-left-widget' }>
            <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Google +' bodyType='lined' loading={this.state.buttonLoading} size='small' />
            <Button onClick = { () => this.setState( { buttonLoading: !this.state.buttonLoading } )} label='Facebook' bodyType='lined' loading={this.state.buttonLoading} size='small' />
        </div>
        </div>
    );
 };

 EquiSpacedView.defaultProps = {
      direction: 'horizontal',
 };

 EquiSpacedView.propTypes = {
   direction: PropTypes.string
 };

