import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth'
import Login from './components/login/Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
            )
    }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Login />} />
            <Route exact path="/auth" component={() => <Login />} />
            <PrivateRoute path="/app" component={() => <h1>You are logged</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes