import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GuardRoute from './shared/routes/GuardRoute';
import loadable from './shared/utils/loadable';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GuardRoute
          path="/login"
          component={loadable(import('./pages/auth/login/Login'))}
          exact
        />
        <GuardRoute
          path="/forgot-password"
          component={loadable(
            import('./pages/auth/forgot-password/ForgotPassword'),
          )}
          exact
        />
        <GuardRoute
          path="/verify-code"
          component={loadable(import('./pages/auth/reset-password/VerifyCode'))}
          exact
        />
        <GuardRoute
          path="/reset-password"
          component={loadable(
            import('./pages/auth/reset-password/ResetPassword'),
          )}
          exact
        />
        <GuardRoute
          isPrivate
          path="/"
          component={loadable(import('./pages/dashboard/DashBoard'))}
          exact
        />
        <GuardRoute
          isPrivate
          path="/project"
          component={loadable(import('./pages/projects'))}
          exact
        />
        <GuardRoute
          isPrivate
          path="/project/:id"
          component={loadable(import('./pages/project/index'))}
          exact
        />
        <GuardRoute
          isPrivate
          path="/notification"
          component={loadable(import('./pages/notifications'))}
          exact
        />
        <GuardRoute
          isPrivate
          path="/setting"
          component={loadable(import('./pages/categories'))}
          exact
        />
        <GuardRoute
          isPrivate
          path="/user/:id"
          component={loadable(import('./pages/user/index'))}
          exact
        />
        <Route path="*" component={loadable(import('./pages/404Page'))} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
