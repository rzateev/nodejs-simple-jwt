import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {APP_ROUTE} from "../Utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    //const isAuth = true
    console.log("AppRouter")
    publicRoutes.map(({path, Component}) =>
        console.log(path)
    )
    //console.log(user)
    return (
        // <Router>
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={APP_ROUTE}/>
        </Switch>
        // </Router>
    );
});

export default AppRouter;