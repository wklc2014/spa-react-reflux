'use strict';
import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory, browserHistory} from 'react-router';

import App from '../component/App.jsx';
import HelloWorld from '../component/view/HelloWorld.jsx';

function validate(nextState, replaceState, callback) {
    // if (!isLoggedIn) {
    //     replaceState(null, '/login');
    // }
    callback();
}

const route = (
    <Router history={browserHistory} onEnter={validate}>
        <Route path='/' component={App}>
            <Route path='/helloworld' component={HelloWorld} />
        </Route>
    </Router>
)

export default route;
