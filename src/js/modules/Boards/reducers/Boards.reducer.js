import uid from 'uid';
import {
  CREATE_BOARD,
  EDIT_BOARD,
  SAVE_BOARD,
} from 'modules/Boards/actions/Boards.actions';

export const initialBoardId = uid();

export const boardsInitialState = [{
  id: initialBoardId,
  name: 'To do',
  editMode: false,
}, {
  id: uid(),
  name: 'In progress',
  editMode: false,
}, {
  id: uid(),
  name: 'Done',
  editMode: false,
}];

export const saveBoard = (state, board) => {
  if (board.name === '') {
    return state.filter(item => item.id !== board.id);
  }
  return state.map((item) => {
    if (item.id === board.id) {
      return { ...item, name: board.name, editMode: false };
    }
    return item;
  });
};

export const editBoard = (state, boardId) => state.map((item) => {
  if (item.id === boardId) {
    return { ...item, editMode: true };
  }
  return { ...item, editMode: false };
});

const boards = (state = boardsInitialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return [
        ...state,
        {
          id: action.id,
          name: '',
          editMode: true,
        },
      ];
    case SAVE_BOARD:
      return saveBoard(state, { id: action.id, name: action.name });
    case EDIT_BOARD:
      return editBoard(state, action.id);
    default:
      return state;
  }
};

export default boards;
