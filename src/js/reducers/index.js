import { combineReducers } from 'redux';
import { reducer as boards } from 'modules/Boards';
import { reducer as cards } from 'modules/Cards';

const reducers = combineReducers({ boards, cards });

export default reducers;