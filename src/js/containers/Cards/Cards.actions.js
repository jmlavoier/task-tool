// Types
export const CREATE_CARD = 'CREATE_CARD';
export const EDIT_CARD   = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const SAVE_CARD   = 'SAVE_CARD';

// Actions
export const createCard = (boardId) => ({
  type: CREATE_CARD,
  boardId
});

export const editCard = cardId => ({
  type: EDIT_CARD,
  id: cardId,
});

export const deleteCard = card => ({
  type: DELETE_CARD,
  cardId: card.id
});

export const saveCard = card => ({
  type: SAVE_CARD,
  id: card.id,
  description: card.description,
});