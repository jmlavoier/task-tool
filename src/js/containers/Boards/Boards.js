import React from 'react';
import { connect } from 'react-redux';

import BoardsList from './components/BoardsList';

const mapStateToProps = state => {
  return {
      boards: state.boards,
  }
}

const Boards = connect(mapStateToProps)(BoardsList);

export default Boards;