import { UIKit } from 'components/ui-kit';

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
        component: UIKit
    }
};

export const TemporaryRoutes = {
    UI_KIT: {
        path: RoutePaths.UI_KIT,
        exact: true,
        data: {},
        component: UIKit
    }
};
