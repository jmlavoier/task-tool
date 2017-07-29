import React from 'react';
import { createStore } from 'redux';

import Container from 'components/Container';
import reducers from 'reducers';

const store = createStore(reducers);

console.log(store.getState());

const App = () => (
    <Container {...store.getState()}/>
);

export default App;
