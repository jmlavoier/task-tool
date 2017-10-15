import {
  CREATE_CARD,
  UPDATE_CARD,
  DELETE_CARD
} from './Cards.actions';

const cardsInitialState = [{
  description: "I must do it",
  boardId: 1,
}];

const cards = (state = cardsInitialState, action) => {
  switch(action.type) {
    case CREATE_CARD:
      return [
        ...state,
        {
          description: "",
          boardId: action.boardId,
        }
      ];
    case UPDATE_CARD:
      return state;
    case DELETE_CARD:
      return state;
    default:
      return state;
  }
}

export default cards;