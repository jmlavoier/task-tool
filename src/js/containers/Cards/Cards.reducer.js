import uid from 'uid';
import { boardId }  from 'containers/Boards/Boards.reducer';

import {
  CREATE_CARD,
  EDIT_CARD,
  DELETE_CARD,
  SAVE_CARD,
  CHANGE_BOARD,
} from './Cards.actions';

const cardsInitialState = [{
  id: uid(),
  description: 'I must do',
  editMode: false,
  boardId,
}];

const saveCard = (state, card) => {
  if (card.description !== '') {
    return state.map(item => 
      (item.id === card.id)
        ? { ...item, description: card.description, editMode: false }
        : item
      )
  } else {
    return state.filter(item => item.id !== card.id);
  }
}

const cards = (state = cardsInitialState, action) => {
  switch(action.type) {
    case CREATE_CARD:
      return [
        ...state,
        {
          id: uid(),
          description: "",
          boardId: action.boardId,
          editMode: true,
        }
      ];
    case SAVE_CARD:
      return saveCard(state, { id: action.id, description: action.description });
    case EDIT_CARD:
      return state.map(item => (item.id === action.id) ? { ...item, editMode: true } : item);
    case CHANGE_BOARD:
      return state.map(item => (item.id === action.cardId) ? { ...item, boardId: action.boardId } : item);
    default:
      return state;
  }
}

export default cards;