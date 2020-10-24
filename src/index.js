import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import {Provider} from 'react-redux'
import {creatStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './store'

//creating store for a set of reduces
const store = applyMiddleware(thunk)(creatStore)(mainReducer)

//configuring redux provider
ReactDOM.render(
<Provider store={store}>
<App />   
</Provider>
    , document.getElementById('root'));

serviceWorker.unregister();


