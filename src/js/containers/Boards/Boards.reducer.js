import uid from 'uid';

import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  SAVE_BOARD,
} from './Boards.actions';

export const boardId = uid();

const boardsInitialState = [{
  id: boardId,
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

const saveBoard = (state, board) => {
  if (board.name !== '') {
    return state.map(item => 
      (item.id === board.id) 
        ? { ...item, name: board.name, editMode: false } 
        : item
      );
  } else {
    return state.filter(b => b.id !== board.id);
  }
}

const editBoard = (state, boardId) => {
  return state.map(item => 
    (item.id === boardId) 
      ? { ...item, editMode: true } 
      : { ...item, editMode: false } 
    );
}

const boards = (state = boardsInitialState, action) => {
  switch(action.type) {
    case CREATE_BOARD:
      return [
          ...state,
          {
            id: uid(),
            name: '',
            editMode: true,
          },
      ];
    case SAVE_BOARD:
      return saveBoard(state, { id: action.id, name: action.name })
    case EDIT_BOARD:
      return editBoard(state, action.id);
    case DELETE_BOARD:
      return state;
    default:
      return state;
  }
}

export default boards;