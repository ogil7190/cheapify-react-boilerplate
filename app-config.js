import { APP_LEVEL_DEBUG, APP_LEVEL_PRODUCTION } from 'constants/generic';

/* modify this line to change debug level of application */
/* Our backend simulated server is running on localhost:9000 , for more info check server.js
If your backend API is running at some another port then change the localhost port to that port address */

export const APP_LEVEL = APP_LEVEL_DEBUG;
export const DEBUG = APP_LEVEL === APP_LEVEL_PRODUCTION ? false : true;
export const APP_HOST = DEBUG ? 'http://localhost:9000' : 'https://something.com';
