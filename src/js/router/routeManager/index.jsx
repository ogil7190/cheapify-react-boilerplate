import React from 'react';
import {values} from 'lodash';
import { Routes, TemporaryRoutes } from 'router/routerConfig';
import { Route, Switch } from 'react-router-dom';
import UIKit from 'components/ui-kit';

export const routeManager = () => {
    return class RouteManager extends React.Component {
        constructor( props ) {
            super( props );
            this.routes = [].concat( values( Routes ), values( TemporaryRoutes ) );
        }

        render() {
            return(
                <Switch>
                    {
                        this.routes.map( ( route, index ) => {
                            return <Route key={ index } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                return <route.component { ...props } routeData={ route.data } { ...this.props } />;
                            } } />;
                        } )
                    }
                </Switch>
            );
        }
    };
};

export const RouteManager = routeManager();
