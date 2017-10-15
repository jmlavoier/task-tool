// Types
export const CREATE_CARD = 'CREATE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const SAVE_CARD   = 'SAVE_CARD';

// Actions
export const createCard = (boardId) => ({
  type: CREATE_CARD,
  boardId
})

export const updateCard = card => ({
  type: UPDATE_CARD,
  card,
})

export const deleteCard = card => ({
  type: DELETE_CARD,
  cardId: card.id
})