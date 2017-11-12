import uid from 'uid';
import reducer, { cardsInitialState, saveCard as saveCardReducer } from './Cards.reducer';
import { CREATE_CARD, EDIT_CARD, DELETE_CARD, SAVE_CARD, CHANGE_BOARD } from 'modules/Cards/actions/Cards.actions';

test('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual(cardsInitialState);
});

test('should handle CREATE_CARD', () => {
  const action = { type: CREATE_CARD, id: uid(), boardId: uid() };
  const expectedState = [
    ...cardsInitialState,
    {
      id: action.id,
      description: '',
      boardId: action.boardId,
      editMode: true,
    },
  ];

  expect(reducer(undefined, action)).toEqual(expectedState);
});

test('should handle SAVE_CARD', () => {
  const action = { type: SAVE_CARD, id: uid(), description: 'testing' };
  const expectedState = saveCardReducer(cardsInitialState, { id: action.id, description: action.description });
  
  expect(reducer(undefined, action)).toEqual(expectedState);
});


test('should saveCard delete card without description', () => {
  const action = { type: SAVE_CARD, id: uid(), description: '' };
  const boardId = uid();
  const state = [
    ...cardsInitialState,
    {
      id: action.id,
      description: action.description,
      boardId,
    }
  ];

  expect(saveCardReducer(state, { 
    id: action.id, 
    description: action.description,
  })).toEqual(cardsInitialState);

});

test('should saveCard save card', () => {
  const action = { type: SAVE_CARD, id: uid(), description: 'tests' };
  const boardId = uid();
  const state = [
    ...cardsInitialState,
    {
      id: action.id,
      description: 'descrption before',
      boardId,
    }
  ];

  const expectedState = [
    ...cardsInitialState,
    {
      id: action.id,
      description: action.description,
      editMode: false,
      boardId,
    }
  ];

  expect(saveCardReducer(state, { 
    id: action.id, 
    description: action.description,
  })).not.toEqual(state);

  expect(saveCardReducer(state, { 
    id: action.id, 
    description: action.description,
  })).toEqual(expectedState);
});

test('should handle EDIT_CARD', () => {
  const [firstItem] = cardsInitialState;
  const action = { type: EDIT_CARD, id: firstItem.id };

  const exepectedState = [
    {
      ...firstItem,
      editMode: true,
    }
  ];
  
  expect(reducer(cardsInitialState, { ...action, id: uid() })).toEqual(cardsInitialState);
  expect(reducer(cardsInitialState, action)).toEqual(exepectedState);
});

test('should handle CHANGE_BOARD', () => {
  const [firstItem] = cardsInitialState;
  const boardId = uid();
  const action = { type: CHANGE_BOARD, cardId: firstItem.id, boardId };

  const exepectedState = [
    {
      ...firstItem,
      boardId,
    }
  ];
  
  expect(reducer(cardsInitialState, { ...action, cardId: uid() })).toEqual(cardsInitialState);
  expect(reducer(cardsInitialState, action)).toEqual(exepectedState);
});

