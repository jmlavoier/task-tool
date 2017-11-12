export const CREATE_BOARD = 'CREATE_BOARD';
export const EDIT_BOARD = 'EDIT_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const SAVE_BOARD = 'SAVE_BOARD';

export const createBoard = boardId => ({
  type: CREATE_BOARD,
  id: boardId,
});

export const deleteBoard = board => ({
  type: DELETE_BOARD,
  boardId: board.id,
});

export const saveBoard = board => ({
  type: SAVE_BOARD,
  id: board.id,
  name: board.name,
});

export const editBoard = boardId => ({
  type: EDIT_BOARD,
  id: boardId,
});
