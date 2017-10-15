export const CREATE_BOARD = 'CREATE_BOARD';
export const UPDATE_BOARD = 'UPDATE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

export const createBoard = () => ({
  type: CREATE_BOARD,
});

export const updateBoard = board => ({
  type: UPDATE_BOARD,
  board,
});

export const deleteBoard = board => ({
  type: DELETE_BOARD,
  boardId: board.id
});
