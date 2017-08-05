import React from 'react';
import Provider from 'react-redux';
import { createStore } from 'redux';

import Container from 'components/Container';
import reducers from 'reducers';

const store = createStore(reducers);

const App = () => (
    <Provider store={store}>
        <Container />
    </Provider>
);

export default App;
