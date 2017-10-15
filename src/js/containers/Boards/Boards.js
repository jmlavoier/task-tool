import React from 'react';
import { connect } from 'react-redux';

import { createBoard } from './Boards.actions';
import BoardsList from './components/BoardsList';

const mapStateToProps = state => ({
  boards: state.boards,
})

const mapDispatchToProps = dispatch => ({
  onBtnAddBoardClick: () => dispatch(createBoard()),
})

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardsList);

export default Boards;