import { combineReducers } from 'redux';
import boards from './boards';
import cards from './cards';

const ContainerInitialState = {
  container: {
    boards: [{
      name: "To Do",
      cards: [{
        description: "I must do it",
      }],
    }],
  }
};

const reducers = combineReducers({ board, card });

export default reducers;