import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';
import { connect } from 'react-redux';

import reducers from 'reducers';
import { addBoard, getBoards } from 'actions';

import Board from 'components/Board';
import BoardsList from 'components/BoardsList';
import style from 'components/Container';

const mapStateProps = state => {
  return {
    boards: reducers.boards(state.boards),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBoard: board => {
      dispatch(addBoard(board))
    }
  }
}

const Container = connect({
  mapStateProps,
  mapDispatchToProps,
})(BoardsList);

export default Container;
