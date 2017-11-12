import uid from 'uid';
import reducer, { 
  boardsInitialState, 
  saveBoard as saveBoardReducer, 
  editBoard as editBoardReducer,
} from './Boards.reducer';
import { createBoard, saveBoard, editBoard } from 'modules/Boards/actions/Boards.actions';
import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  SAVE_BOARD,
} from 'modules/Boards/actions/Boards.actions';

test('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual(boardsInitialState);
});

test('should handle CREATE_BOARD', () => {
  const boardId = uid();
  const expectedState = [
    ...boardsInitialState,
    {
      id: boardId,
      name: '',
      editMode: true,
    },
  ];

  expect(reducer(undefined, createBoard(boardId))).toEqual(expectedState);
});

test('should saveBoard delete board without name', () => {
  const [firstItem] = boardsInitialState;
  const board = { id: firstItem.id, name: '' };
  const exepectedState = boardsInitialState.slice(1, boardsInitialState.length);

  expect(saveBoardReducer(boardsInitialState, board)).toEqual(exepectedState);
});

test('should saveCard save board', () => {
  const board = { id: uid(), name: 'tests' };
  const state = [
    ...boardsInitialState,
    {
      id: board.id,
      name: 'descrption before',
      editMode: false,
    }
  ];

  const expectedState = [
    ...boardsInitialState,
    {
      id: board.id,
      name: board.name,
      editMode: false,
    }
  ];

  expect(saveBoardReducer(state, { 
    id: board.id, 
    name: board.name,
  })).not.toEqual(state);

  expect(saveBoardReducer(state, { 
    id: board.id, 
    name: board.name,
  })).toEqual(expectedState);
});

test('should handle SAVE_BOARD', () => {
  const [firstItem] = boardsInitialState;
  const board = { id: uid(), name: 'testing', editMode: false, }

  const state = [
    ...boardsInitialState,
    {
      id: board.id,
      name: 'before change',
      editMode: false,
    },
  ];

  const expectedState = [
    ...boardsInitialState,
    ...board,
  ];
  
  expect(reducer(boardsInitialState, saveBoard(board))).toEqual(expectedState);
});

test('should handle EDIT_BOARD', () => {
  const [firstItem] = boardsInitialState;
  const boardId = firstItem.id;

  const exepectedState = [
    {
      ...firstItem,
      editMode: true,
    },
    ...boardsInitialState.slice(1, boardsInitialState.length),
  ];
  
  expect(reducer(boardsInitialState, editBoard(uid()))).toEqual(boardsInitialState);
  expect(reducer(boardsInitialState, editBoard(boardId))).toEqual(exepectedState);
});

