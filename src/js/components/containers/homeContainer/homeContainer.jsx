import React from 'react';
import { Redirect } from 'react-router-dom';
import { LandingPageView, SuccessView, FailureView } from 'root/src/js/views/landingPageView';
import { dataFetcherHoc } from 'hoc/generic/dataFetcherHoc';
import { NetworkRoutes } from 'router/networkRoutes';
import { isEmpty } from 'lodash';
import { REQUEST_GET, SUCCESS } from '../../../constants/generic';
import { MessageBus } from 'services/MessageBus';
import { OPEN_OVERLAY } from 'constants/messageBusEvents';
import { getGenericDataFetch } from 'services/GenericDataFetch.service';

/**
 * @Auth Aman Kalra && OGIL7190
 * @type {class}
 * @desc A React container/smart component to render a React presentational/dumb component (view).
 * @example
 * import { LoginContainer } from 'containers/LoginContainer';
 *
 * // render
 * <LoginContainer propName='propValue'/>
 */

class _HomeContainer extends React.Component {

    /**
     * @param {object} props - props
     */
    constructor( props ) {

        super( props );

        // bind methods to this
        this.__bind();

        // component state
        this.state = {
            url: '',
            price: 0,
            result: '',
            redirect: false,
            componentData: {}
        };
	}


    /**
     * @desc bind class methods to current instance
     */
    __bind() {
        this.actionHandler = this.actionHandler.bind( this );
        this.checkPrice = this.checkPrice.bind( this );
        this.handleFieldChange = this.handleFieldChange.bind( this );
        this.viewDecider = this.viewDecider.bind( this );
        this.onFailure = this.onFailure.bind( this );
        this.onSuccess = this.onSuccess.bind( this );
    }

    actionHandler( actionType ) {
        switch( actionType ) {
            case 'FORGOT_PASSWORD': return this.setState( { activeView: 'FORGOT_PASSWORD' } );
            case 'LOGIN_VIEW': return this.setState( { activeView: 'LOGIN_VIEW' } );
        }
    }

    componentWillReceiveProps( nextProps ) {
        console.log( 'homeContainer.componentWillReceiveProps()' );
        console.log( 'prevProps', this.props.componentData );
        console.log( 'nextProps', nextProps.componentData );

        if( this.state.componentData !== nextProps.componentData ) {
            
            // MessageBus.trigger( OPEN_OVERLAY, { component: Button, componentData: {
            //     label: nextProps.componentData.message,
            //     loading: false
            // } } );

            MessageBus.trigger( OPEN_OVERLAY, { component: SuccessView, componentData: {
                message: nextProps.componentData.message,
                loading: false
            } } );

            // this.setState( {
            //     redirect: true
            // } );

            //MessageBus.trigger( OPEN_OVERLAY, { component: HomeContainer, componentData: {} } );
        }
    }

    /**
     * @description Not in use.. instead we are using componentWillReceiveProps since we are making a SPA we should not change the
     * complete view instead use Overlay view using Message Bus
     */
    viewDecider( componentData ) {

        if( isEmpty( componentData ) ) {
            return(
                <LandingPageView
                    params = { {...this.state} }
                    rightWidget = { this.state.activeView }
                    actionHandler = {this.actionHandler}
                    checkPrice = { this.checkPrice }
                    handleFieldChange = { this.handleFieldChange }
                    result = { this.state.result }
                />
            );
        } else if( componentData && componentData.status === SUCCESS  && componentData!== undefined ) {
            return(
                <SuccessView
                    message = { componentData && componentData.message}
                />
            );
        } else {
            return(
                <FailureView
                    message = {componentData && componentData.message}
                />
            );
        }
    }
    
    handleFieldChange( key, value ) {
        this.setState( {
            [ key ]: value
        } );
    }

    checkPrice( url, price = 0 ) {
        getGenericDataFetch( {
            path: NetworkRoutes.FETCH_PRICE,
            handlers: {
                success: this.onSuccess,
                failure: this.onFailure
            },
            params: {
                url,
                price
            }
        } );
    
        // this.setState( { result: '' } );
        // this.props.fetchData( {
        //     url,
        //     price
        // } );
    }

    onSuccess( response ) {
        console.log( 'homeContainer.onSuccess()' );
        this.setState( { componentData: response } );
        console.log( this.state.componentData );
            MessageBus.trigger( OPEN_OVERLAY, { component: SuccessView, componentData: {
                message: this.state.componentData.message,
                loading: false
            } } );
    }

    onFailure( response ) {
        console.log( 'homeContainer.onFailure()' );
        this.setState( { componentData: response } );
    }

     /**
     * @desc Render a React view component
     */
    render() {
        if( true === this.state.redirect ) {
            return(
                <Redirect
                    to={{pathname: '/ui-kit' }}
                />
            );
        }else{

        //return this.viewDecider( this.props.componentData );
        return (
            <LandingPageView
                {...this.state}
                loading = { this.props.loading }
                rightWidget = { this.state.activeView }
                actionHandler = {this.actionHandler}
                checkPrice = { this.checkPrice }
                handleFieldChange = { this.handleFieldChange }
            />
        );
}
    }
}

const DataFetcherConfig = {
    autoInit: false,
    path: NetworkRoutes.FETCH_PRICE,
    method: REQUEST_GET
};

//export const HomeContainer = dataFetcherHoc( _HomeContainer, DataFetcherConfig );
export const HomeContainer = _HomeContainer;

