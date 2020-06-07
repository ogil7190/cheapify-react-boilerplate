import React from 'react';
import classNames from 'classnames';
import { noop } from 'lodash';
import PropTypes from 'prop-types';

/**
 * @desc Default view of ContentTruncator Hoc
 */

export const contentTruncatorView = ( props ) => {
    const classname = classNames( 'ui-content-truncator-view', props.classname );
    return (
        <div className = { classname} >
            { renderChildren( props ) }
            { renderViewAllButton( props ) }
        </div>
    );
};

const renderChildren = ( props ) => {

    // _childrenArray is an array containing the children views that are to be rendered.
    const _childrenArray = [];

    if( !props.isOpen ) {

        // if state of View All is not open then we only store previewItemsCount number of items in _children and render them
        React.Children.map( props.children, ( child, index ) => {
            if( index < props.itemCount ) {
                _childrenArray.push( child );
            }
        } );
    } else {
        
        // if state of View All is open then we store all the items in _children and render them all.
        React.Children.map( props.children, ( child ) => {
            _childrenArray.push( child );
        } );
    }
    return _childrenArray;
};

const renderViewAllButton = ( props ) => {
    
    const onClick = ( props.children.length <= props.itemCount )? noop: props.handleToggle;

    const className= classNames( 'ui-content-truncator__button', {
        'ui-content-truncator__button--disabled': ( props.children.length <= props.itemCount )
    } );
    
    if( !props.isOpen ) {
        return (
            <button
                onClick = { onClick }
                className = { className }
            >
                <span className = { 'ui-content-truncator__button--show-less' }> { `${props.showAllLabel} (${props.children.length})`  }</span>
            </button>
        );
    } else {
        return (
            <button
                onClick = { onClick }
                className = { className }
            >
                <span classname = { 'ui-content-truncator__button--show-more' }> { `${props.showLessLabel} (${props.children.length})` }</span>
            </button>
        );
    }
};

contentTruncatorView.defaultProps = {
    itemCount: 2,
    showTotalCountAgainstAction: true,
    showLessLabel: 'ShowLess',
    showAllLabel: 'ShowAll'
};

contentTruncatorView.propTypes = {
    itemCount: PropTypes.integer,
    showAllLabel: PropTypes.string,
    showLessLabel: PropTypes.string,
    showTotalCountAgainstAction: PropTypes.bool
};


