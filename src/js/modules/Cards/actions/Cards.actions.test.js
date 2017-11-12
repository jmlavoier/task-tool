import uid from 'uid';
import { CREATE_CARD, EDIT_CARD, DELETE_CARD, SAVE_CARD, CHANGE_BOARD } from 'modules/Cards/actions/Cards.actions';
import { createCard, saveCard, editCard, changeBoard, deleteCard } from 'modules/Cards/actions/Cards.actions';

const card = { id: uid(), description: 'test card' };

test('should create action to create card', ()=> {
  const boardId = uid();
  const cardId = uid();
  const expectedAction = {
    type: CREATE_CARD,
    id: cardId,
    boardId,
  };

  expect(createCard(cardId, boardId)).toEqual(expectedAction);
});

test('should create action to edit card', () => {
  const cardId = uid();
  const expectedAction = {
    type: EDIT_CARD,
    id: cardId,
  };

  expect(editCard(cardId)).toEqual(expectedAction);
});
test('should create action to delete card', () => {
  const expectedAction = {
    type: DELETE_CARD,
    cardId: card.id,
  };

  expect(deleteCard(card)).toEqual(expectedAction);
});

test('should create action to save board', () => {
  const expectedAction = {
    type: SAVE_CARD,
    id: card.id,
    description: card.description,
  };

  expect(saveCard(card)).toEqual(expectedAction);

});

test('should create action to change board', () => {
  const boardId = uid();
  const cardId = uid();
  const expectedAction = {
    type: CHANGE_BOARD,
    cardId,
    boardId,
  };

  expect(changeBoard(cardId, boardId)).toEqual(expectedAction);

});