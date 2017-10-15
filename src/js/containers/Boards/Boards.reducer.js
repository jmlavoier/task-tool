import {
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD
} from './Boards.actionTypes.js';

const boardsInitialState = [{
  id: 0,
  name: 'To do',
}, {
  id: 1,
  name: 'In progress',
}, {
  id: 2,
  name: 'Done',
}];

const boards = (state = boardsInitialState, action) => {
  console.log(state);
  switch(action.type) {
    case CREATE_BOARD:
      return [
          ...state,
          {
            id: state.length + 1,
            name: "New Board",
          },
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