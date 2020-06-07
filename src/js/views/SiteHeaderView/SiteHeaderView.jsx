import React from 'react';

export const SiteHeaderView = ( props ) => {
    const leftArray = [ 'Home', 'Contact', 'Orders' ];
    const rightArray = [ 'Settings', 'About', 'My Account' ];
    return(
        <div className = 'ui-site-header-view'>
            { renderLeftItems( { leftArray } ) }
            { renderRightItems( { rightArray } ) }
         </div>
    );
};

const renderLeftItems = ( { leftArray } ) => {
    return(
        <div className = 'ui-site-header-view__left-items'>
        {
            leftArray.map( ( item, index ) => {
                return (
                    <div className = 'ui-site-header-view__left-items__item'>
                        <p> {item} </p>
                    </div>
                );
            } )
        }
        </div>
        
    );
};

const renderRightItems = ( { rightArray} ) => {
    return(
        <div className = 'ui-site-header-view__right-items'>
        {
            rightArray.map( ( item, index ) => {
                return (
                    <div className = 'ui-site-header-view__right-items__item'>
                        <p> {item} </p>
                    </div>
                );
            } )
        }
        </div>
        
    );
};

