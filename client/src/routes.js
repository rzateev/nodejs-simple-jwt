import Admin from "./pages/Admin";
import {ADMIN_ROUTE, STOCK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, APP_ROUTE} from "./Utils/consts";

import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import StockPage from "./pages/StockPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

]

export const publicRoutes = [
    {
        path: APP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
    ,
    {
        path: STOCK_ROUTE+ '/:id',
        Component: StockPage
    }

]