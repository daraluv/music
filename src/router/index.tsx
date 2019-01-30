import * as React from 'react';
import routers from './router';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {routers.map((router, key) => (
        <Route path={router.path} exact={router.exact} component={router.component} key={key} />
      ))}
    </Switch>
  </BrowserRouter>
)


export default AppRouter;