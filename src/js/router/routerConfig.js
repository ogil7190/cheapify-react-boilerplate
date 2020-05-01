import { UIKitWithDataFetcher, UiKitWithHeader } from 'components/ui-kit';
import { LoginContainer } from 'components/containers/loginContainer';
import { HomeContainer } from 'components/containers/homeContainer';
import * as ROUTE_PATHS from 'constants/route-paths';

export const Routes = {
    ROOT: {
        path: ROUTE_PATHS.ROOT,
        exact: true,
        data: {},
        component: LoginContainer
    },
    LANDING: {
        path: ROUTE_PATHS.LANDING,
        exact: true,
        data: {},
        component: HomeContainer
    }
};

export const TemporaryRoutes = {
    UI_KIT: {
        path: ROUTE_PATHS.UI_KIT,
        exact: true,
        data: {},
        component: UiKitWithHeader
    }
};
