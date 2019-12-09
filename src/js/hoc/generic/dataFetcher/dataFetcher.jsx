import React from 'react';
import propTypes from 'prop-types';
import { Http } from './services';
import { REQUEST_GET, REQUEST_POST } from 'constants/generic';

/*
    * @Author Aman Kalra > OGIL
    * Wraps the component with BrowserRouter from react-router-dom
    * Must be used with top level component only (if not exception)
*/

export const dataFetcherHoc = ( Component, props ) => {
    class DataFetcherHoc extends React.Component {
        fetchData() {
            
        }

        render() {
            return (
                <Component fetchData = { this.fetchData } { ...this.props } />
            );
        }
    }

    DataFetcherHoc.defaultProps = {

    };

    DataFetcherHoc.propTypes = {

    };
    
    return DataFetcherHoc;
};

