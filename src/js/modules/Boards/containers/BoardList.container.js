import uid from 'uid';
import { connect } from 'react-redux';

import { createBoard, saveBoard, editBoard } from 'modules/Boards/actions/Boards.actions';
import BoardsList from 'modules/Boards/components/BoardsList';

const mapStateToProps = state => ({
  boards: state.boards,
});

const mapDispatchToProps = dispatch => ({
  onBtnAddBoardClick: () => dispatch(createBoard(uid())),
  onFieldNameBlur: board => dispatch(saveBoard(board)),
  onClickName: boardId => dispatch(editBoard(boardId)),
});

const Boards = connect(mapStateToProps, mapDispatchToProps)(BoardsList);

export default Boards;
