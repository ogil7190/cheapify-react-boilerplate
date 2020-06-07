import { HTTP } from 'services/Http';
import { APP_HOST } from 'root/app-config.js';


export const getGenericDataFetch = ( { path, handlers, params, url } ) => {

    const config =  {
        host: APP_HOST,
        path: path,
        _url: url,
        params: params,
        handlers: {
            onSuccess: handlers.success,
            onFailure: handlers.failure
        }
    };

    //  console.log( 'config is', config );
    
    return HTTP.get( config );
};


