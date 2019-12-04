import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/*
    * @Author OGIL
    * Wraps the component with BrowserRouter from react-router-dom
    * Must be used with top level component only (if not exception)
*/
export const withBrowserRouter = ( Component ) => {
    return(
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    );
};
