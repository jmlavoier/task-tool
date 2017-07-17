import {
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD
} from 'constants';

const boardsInitialState = [{
  name: "To Do",
  cards: [{
    description: "I must do it",
  }],
}];

const boards = (state = boardsInitialState, action) => {
  switch(action.type) {
    case CRAETE_BOARD:
      return state;
    case UPDATE_BOARD:
      return state;
    case DELETE_BOARD:
      return state;
  }
}

export default boards;