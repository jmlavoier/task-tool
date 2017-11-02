import { connect } from 'react-redux';

import { createBoard, saveBoard, editBoard } from './Boards.actions';
import BoardsList from './components/BoardsList';

const mapStateToProps = state => ({
  boards: state.boards,
});

const mapDispatchToProps = dispatch => ({
  onBtnAddBoardClick: () => dispatch(createBoard()),
  onFieldNameBlur: board => dispatch(saveBoard(board)),
  onClickName: boardId => dispatch(editBoard(boardId)),
});

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardsList);

export default Boards;
