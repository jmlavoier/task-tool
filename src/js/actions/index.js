import { 
    CREATE_BOARD,
    GET_BOARDS
} from 'constants';

export const addBoard = todo => {
    return {
        type: CREATE_BOARD,
        todo,
    }
}

export const getBoards = () => {
    return {
        type: GET_BOARDS,
    }
}