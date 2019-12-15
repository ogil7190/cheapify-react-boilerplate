import React from 'react';
import { Button } from 'views/generic/button';
import { InputField } from 'views/generic/inputField';
import { EquiSpacedView } from '../generic/equiSpacedView';
import { Card } from '../generic/card';
import { MdEmail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';

/**
 * @Auth Aman Kalra > OGIL
 * @desc An generic component to render various views/components in an equispaced manner
 * Expected Props:
 * 1: direction (can be vertical or horizontal) -> based on the direction, item alignment will be decided. (By default, horizontal has been set)
 */

 export const LoginView = ( props ) => {
    const renderIcon = ( value ) => {
        let Icon;
        switch( value ) {
            case 'email' : Icon = MdEmail; break;
            case 'password' : Icon = MdLock; break;
        }
        
        return <div className='ui-login-view__icon'>
            <Icon size='20' />
        </div>;
    };

    const renderLoginView = () => {
        return <div>
            <InputField type='text' placeholder="Enter your E-mail Id" iconPosition='left' renderIcon={() => renderIcon( 'email' )}></InputField>
            <InputField type='password' placeholder="Enter your Password" iconPosition='left' renderIcon={() => renderIcon( 'password' )}></InputField>
            <div className='ui-login-view__right-widget__action-container'>
                <div className='ui-login-view__right-widget__action-container__link' onClick={ () => props.actionHandler( 'FORGOT_PASSWORD' ) }>
                    <span> Forgot Password ?</span>
                </div>
                <div className='ui-login-view__right-widget__action-container__button--submit'>
                    <Button withoutPadding={true} withoutMargin={true} label=' Signin ' size='medium' bodyType='lined' changeOnHover={true} />
                </div>
            </div>
        </div>;
    };

    const renderForgotPasswordView = () => {
        return <div>
            <InputField type='text' placeholder="Enter your E-mail Id" iconPosition='left' renderIcon={() => renderIcon( 'email' )}></InputField>
            <div className='ui-login-view__forgot_text'>
                <span>We will send an OTP on your E-mail Id.<br></br> Never share your OTP with anyone for security reasons.</span>
            </div>
                            <div className='ui-login-view__right-widget__action-container'>
                                <div className='ui-login-view__right-widget__action-container__link' onClick={ () => props.actionHandler( 'LOGIN_VIEW' ) } >
                                    <span> Login Now </span>
                                </div>
                                <div className='ui-login-view__right-widget__action-container__button--submit'>
                                    <Button withoutPadding={true} label=' Reset Password ' size='medium' bodyType='lined' changeOnHover={true} />
                                </div>
                            </div>
        </div>;
    };

    const renderRight = () => {
        switch( props.rightWidget ) {
            case 'LOGIN_VIEW' : return renderLoginView();
            case 'FORGOT_PASSWORD' : return renderForgotPasswordView();
        }
    };

    /* @Todo Can be used with card with header and footer */
    return (
        <div className='ui-login-view'>
            <Card>
                <div className = 'ui-login-view__header'>
                    <div className='ui-login-view__header__title'>
                        {'Quora'}
                    </div>
                </div>

                <div className='ui-login-view__body'>
                    <EquiSpacedView>
                        <div className = { 'ui-login-view__left-widget' }>
                            <div className = 'ui-login-view__left-widget__button-container'>
                                <Button label='Google +' bodyType='lined' size='medium' changeOnHover={true} labelClass = { 'ui-login-view__left-widget__custom-button-padding' } color = 'red' labelColor = 'red' />
                                <Button label='Facebook' bodyType='lined' size='medium' changeOnHover={true} labelClass = { 'ui-login-view__left-widget__custom-button-padding' } color = 'blue' labelColor = 'blue' />
                            </div>
                            <div className='ui-login-view__left-widget__text-container'>
                                <span className = 'ui-login-view__left-widget__text-container__text'>Don't have an account? Sign Up Now! <br/></span>
                                     <span>
                                        Use Social Login to instantly access the platform.<br/>
                                        By Signing up you agree to our Terms and Conditions.
                                    </span>
                            </div>
                        </div>
                        <div className = { 'ui-login-view__right-widget' }>
                            {
                                renderRight()
                            }
                        </div>
                    </EquiSpacedView>
                </div>
                
                <div className = 'ui-login-view__footer'>
                    <span> Terms of Service </span>
                    <span> Privacy Policy </span>
                    <span> Contact Us </span>
                    <span> About Us </span>
                </div>
            </Card>
        </div>
    );
 };

 LoginView.defaultProps = {
 };

 LoginView.propTypes = {
 };

