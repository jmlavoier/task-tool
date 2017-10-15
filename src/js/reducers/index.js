import { combineReducers } from 'redux';
import { reducer as boards } from 'containers/Boards';
import { reducer as cards } from 'containers/Cards';

const reducers = combineReducers(boards, cards);

export default reducers;