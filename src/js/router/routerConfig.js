import { UIKitWithDataFetcher } from 'components/ui-kit';
import { LoginContainer } from 'components/containers/loginContainer';

export const RoutePaths = {
    ROOT: '/',
    HOME: '/home',
    LOGIN: '/login',
    UI_KIT: '/ui-kit'
};

export const Routes = {
    ROOT: {
        path: RoutePaths.ROOT,
        exact: true,
        data: {},
        component: LoginContainer
    }
};

export const TemporaryRoutes = {
    UI_KIT: {
        path: RoutePaths.UI_KIT,
        exact: true,
        data: {},
        component: UIKitWithDataFetcher
    }
};
