import React from 'react';
import { connect } from 'react-redux';

import Container from 'components/Container';

const mapStateToProps = state => {
    console.log(state);
    return {
        boards: state.boards,
    }
}

const App = connect(mapStateToProps)(Container);

export default App;
