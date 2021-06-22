import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthedRoute = ({Component, authed}) => {
    return (
        <Route 
        render={(props) => authed === true
            ? <Component {...props} />
        : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
    />
    )
}

export default AuthedRoute;