import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Container from 'components/Container';
import reducers from 'reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
