import React from 'react';

import Boards from 'containers/Boards';

import style from './App.sass';

const App = () => (
  <div className={style.app} >
    <h1 className={style.title}>Task Tool</h1>
    <Boards />
  </div> 
);

export default App;