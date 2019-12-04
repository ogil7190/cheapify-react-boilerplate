import React from 'react';
import {values} from 'lodash';
import { Routes, TemporaryRoutes } from 'router/routerConfig';
import { Route, Switch } from 'react-router-dom';

export const routeManager = () => {
    return class RouteManager extends React.Component {
        constructor( props ) {
            super( props );
            if( props.debug ) {
                this.routes = [].concat( values( Routes ), values( TemporaryRoutes ) ); /* include temporary routes while debugging */
            } else {
                this.routes = values( Routes );
            }
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
