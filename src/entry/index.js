'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory, browserHistory} from 'react-router';

import '../style/index.scss';

import route from '../route';
const oApp = document.getElementById('app');

// import '../mock';

render(route, oApp);
