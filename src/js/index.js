import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from 'reducers';
import App from 'App';

const store = createStore(
  reducers,
  undefined,
  compose(
    autoRehydrate(),
  ),
);

persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
