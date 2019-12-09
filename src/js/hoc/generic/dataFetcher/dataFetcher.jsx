import React from 'react';
import { HTTP } from 'services/Http';
import { REQUEST_POST } from 'constants/generic';
import { APP_HOST } from 'root/app-config.js';

/*
    * @Author Aman Kalra > OGIL
    * Wraps the component with BrowserRouter from react-router-dom
    * Must be used with top level component only (if not exception)
*/

export const dataFetcherHoc = ( Component, { path, params = {}, method = REQUEST_POST } ) => {
    class DataFetcherHoc extends React.Component {
        constructor( props ) {
            super( props );
            this.state = {
                loading: false
            };
        }

        fetchData() {
            this.setState( { loading: true}, () => {
                const config =  {
                    host: APP_HOST,
                    path,
                    params,
                    handlers: {
                        onSuccess: this.onSuccess.bind( this ),
                        onFailure: this.onFailure.bind( this ),
                    }
                };
                
                if( method === REQUEST_POST ) {
                    return HTTP.post( config );
                } else {
                    return HTTP.get( config );
                }
            } );
        }

        onSuccess( response ) {
            this.setState( { componentData: response, error: false, loading: false} );
        }

        onFailure( response ) {
            this.setState( { componentData: response, error: true, loading: false } );
        }

        componentDidMount() {
            
            /* start fetching data as soon as component mounts */
            this.fetchData();
        }

        render() {
            return (
                <Component { ... this.state} { ...this.props } fetchData = { this.fetchData } />
            );
        }
    }

    DataFetcherHoc.defaultProps = {

    };

    DataFetcherHoc.propTypes = {

    };
    
    return DataFetcherHoc;
};

