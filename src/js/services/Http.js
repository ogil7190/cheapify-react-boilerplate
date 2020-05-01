import axios from 'axios';
import { shortID } from 'utils/common';
import { isUndefined } from 'lodash';

const getConfig = ( method, params, host, path, headers, cancelToken, _url ) => {
    const _host = host || 'http:localhost:9000';
    const _path = path || '/';
    const url = isUndefined( _url ) ? _host + _path: _url;
    const _default = {
        requestId: shortID(),
        cancelToken,
        url,
        params: params || {},
        method: method || 'post',
        timeout: 3 * 60 * 1000, /* 3 minute timeout */

        /* @todo We need some logic for auth tokens */
        headers: headers || {
            'content-type': 'application/json',
            'Accept': 'application/json',
        }
    };
    console.log( 'url is ', url );
    return _default;
};

const requestBuilder = ( { method, handlers, params, host, path, header, cancelToken, _url } ) => {
    const config = getConfig( method, params, host, path, header, cancelToken, _url );
    console.log( 'requestBuilder', config );
    axios( config ).then( ( response ) => {
        handlers.onSuccess && handlers.onSuccess( response.data );
    } ).catch( ( error ) => {
        console.log( 'ERROR HTTP.js', error );
        handlers.onFailure && handlers.onFailure( error );
    } );
};
export const HTTP = {};

HTTP.get = ( config ) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    requestBuilder( { ...config, cancelToken: source.token, method: 'GET'} );
    return source.cancel;
};

HTTP.post = ( config ) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    requestBuilder( { ...config, cancelToken: source.token, method: 'POST'} );
    return source.cancel;
};
