import axios from 'axios';
import { shortID } from 'utils';

const getConfig = ( method, params, host, path, headers, cancelToken ) => {
    const _default = {
        requestId: shortID(),
        cancelToken,
        host: host || 'http://localhost',
        path: path || '/',
        params: params || {},
        method: method || 'POST',
        timeout: 3 * 60 * 1000, /* 3 minute timeout */

        /* @todo We need some logic for auth tokens */
        headers: headers || {
            'content-type': 'application/json',
            'Accept': 'application/json',
        }
    };
    return _default;
};

const requestBuilder = ( { method, handlers, params, host, url, header, cancelToken } ) => {
    const config = getConfig( method, params, host, url, header, cancelToken );
    axios( config ).then( ( response ) => {
        handlers.onSuccess && handlers.onSuccess( response );
    } ).catch( ( error ) => {
        log.debug( 'ERROR HTTP.js', error );
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
