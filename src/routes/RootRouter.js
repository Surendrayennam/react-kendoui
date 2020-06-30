import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import config from './RoutesConfig';



const RootRouter = () => {

    const renderRoutes = (routes) => {
        return routes.map( ({ path,component, exact = false}, index) => {
            return  <Route 
                        exact={exact}
                        path={path}
                        component={component} />
        })
    }

    return (
        <Switch>
            {renderRoutes(config)}
        </Switch>
    )
        
}

export default RootRouter;
