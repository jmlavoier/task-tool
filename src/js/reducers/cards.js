import {
  CREATE_CARD,
  UPDATE_CARD,
  DELETE_CARD
} from 'constants';

const cardsInitialState = [{
  description: "I must do it",
}];

const cards = (state = boardsInitialState, action) => {
  switch(action.type) {
    case CRAETE_CARD:
      return state;
    case UPDATE_CARD:
      return state;
    case DELETE_CARD:
      return state;
  }
}

export default cards;