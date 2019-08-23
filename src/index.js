import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PostReducer from './reducers/postReducer';

const store = createStore(PostReducer);

ReactDOM.render(
    <HashRouter>
    <Switch>
        
        <Provider store={store}>
            <App />
        </Provider>,
        
    </Switch>
</HashRouter> ,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

