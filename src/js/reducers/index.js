import { combineReducers } from 'redux';
import boards from './boards';
import cards from './cards';

const reducers = combineReducers({ boards, cards });

export default reducers;