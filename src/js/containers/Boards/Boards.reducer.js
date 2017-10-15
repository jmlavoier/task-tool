import {
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD
} from './Boards.actionTypes.js';

const boardsInitialState = [{
  id: 1,
  name: 'To do',
}, {
  id: 2,
  name: 'In progress',
}, {
  id: 3,
  name: 'Done',
}];

const boards = (state = boardsInitialState, action) => {
  switch(action.type) {
    case CREATE_BOARD:
      return [
          ...state,
          action.board,
      ];
    case UPDATE_BOARD:
      return state;
    case DELETE_BOARD:
      return state;
    default:
      return state;
  }
}

export default boards;