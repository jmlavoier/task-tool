import uid from 'uid';
import { createBoard, saveBoard, editBoard, deleteBoard } from 'modules/Boards/actions/Boards.actions';
import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  SAVE_BOARD,
} from 'modules/Boards/actions/Boards.actions';

const board = { id: uid(), name: 'testing' };

test('should create action to create board', () => {
  const expectedAction = {
    type: CREATE_BOARD,
  };

  expect(createBoard(board)).toEqual(expectedAction);

});

test('should create action to save board', () => {
  const expectedAction = {
    type: SAVE_BOARD,
    id: board.id,
    name: board.name,
  };

  expect(saveBoard(board)).toEqual(expectedAction);

});

test('should create action to edit board', () => {
  const boardId = uid();
  const expectedAction = {
    type: EDIT_BOARD,
    id: boardId,
  };

  expect(editBoard(boardId)).toEqual(expectedAction);

});

test('should create action to delete board', () => {
  const expectedAction = {
    type: DELETE_BOARD,
    boardId: board.id,
  };

  expect(deleteBoard(board)).toEqual(expectedAction);
});
