import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './reducks'

import 'moment/locale/tr';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
