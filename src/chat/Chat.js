import React from 'react';
import './chat.scss';
import SignIn from '../components/login/login'
import AuthedRoute from '../components/authed-route/authed-route'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import SignUp from '../components/signup/signup';
import LandingPage from '../components/chat/chat';
import { useSelector } from 'react-redux'

const Chat = () => {
    const user = useSelector((state) => state.user)
    return (
        <Router>
            <Switch>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>

                {/* this is the correct route */}
                {/* <AuthedRoute authed={user.authenticated}  path="/" Component={LandingPage}/> */}

                {/* Only for debugging */}
                <Route path="/" component={LandingPage}/>
            </Switch>
        </Router>
    )
}

export {
    Chat
}