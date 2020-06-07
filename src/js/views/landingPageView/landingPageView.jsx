import React from 'react';
import { Button } from 'views/generic/button';
import { InputField } from 'views/generic/inputField';
import { Card } from '../generic/card';
import { MdEmail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';

/**
 * @Auth Aman Kalra > OGIL
 * @desc An generic component to render various views/components in an equispaced manner
 * Expected Props:
 * 1: direction (can be vertical or horizontal) -> based on the direction, item alignment will be decided. (By default, horizontal has been set)
 */

 export const SuccessView = ( props ) => {
     return (
        <div className="ui-landing-page-success-view">
            <p>{ props.message }</p>
        </div>
     );
 };

 export const FailureView = ( props ) => {
     return (
        <div className="ui-landing-page-success-view">
            <p>{ props.message }</p>
        </div>
     );
 };

 export const LandingPageView = ( props ) => {
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

    const renderLandingView = () => {
        const { handleFieldChange, checkPrice } = props;
        return <div>
            <InputField onChange={ ( value ) => handleFieldChange( 'url', value )} type='text' placeholder="Enter the Product Url" iconPosition='left' renderIcon={() => renderIcon( 'email' )}></InputField>
            <InputField onChange={ ( value ) => handleFieldChange( 'price', value )} type='number' placeholder="Enter the Desired Price" iconPosition='left' renderIcon={() => renderIcon( 'password' )}></InputField>
            <div className='ui-login-view__right-widget__action-container'>
                <div className='ui-login-view__right-widget__action-container__button--submit'>
                    <Button loading = { props.loading } onClick = { () => checkPrice( props.url, props.price ) } withoutPadding={true} withoutMargin={true} label=' Check Price ' size='medium' bodyType='lined' changeOnHover={true} />
                </div>
            </div>
            <div>
                <p>
                    {
                        props && props.result
                    }
                </p>
            </div>
        </div>;
    };

    /* @Todo Can be used with card with header and footer */
    return (
        <div className='ui-landing-view'>
            <div className = 'ui-heading'>
                <h1>FLipkart Price Tracker</h1>
            </div>
            <Card className = 'view-card-custom-width'>
                <div className='ui-login-view__body'>
                        <div className = { 'ui-login-view__right-widget' }>
                            {
                                renderLandingView( props )
                            }
                        </div>
                </div>
            </Card>
        </div>
    );
 };

 LandingPageView.defaultProps = {
 };

 LandingPageView.propTypes = {
 };

