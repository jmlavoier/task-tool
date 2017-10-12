import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import reducers from 'reducers';
import { createStore } from 'redux';

import App from './App';

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);