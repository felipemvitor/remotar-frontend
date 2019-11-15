import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth'
import Login from './components/login/Login.jsx'
import Home from './components/home/Home.jsx'
import PageNotFound from './components/page-not-found/PageNotFound.jsx'
import ClientsPanel from './components/client/clients-panel/ClientsPanel'

const home = () => <Home />
const clients = () => <ClientsPanel />
const login = () => <Login />
const notFound = () => <PageNotFound />

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticated ? (
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
            <PrivateRoute exact path="/" component={home} />
            <PrivateRoute exact path="/clients" component={clients} />
            <Route exact path="/auth" component={login} />
            <Route component={notFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes