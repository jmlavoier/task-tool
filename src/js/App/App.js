import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Boards from 'modules/Boards';

import style from './App.sass';

const App = () => (
  <div className={style.app} >
    <h1 className={style.title}>Task Tool</h1>
    <Boards />
  </div>
);

export default DragDropContext(HTML5Backend)(App);
