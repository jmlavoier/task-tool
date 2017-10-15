import React from 'react';
import PropTypes from 'prop-types';

import Board from 'containers/Boards/components/Board';
import BtnAddBoard from 'containers/Boards/components/BtnAddBoard';

import style from './BoardsList.sass';

const BoardsList = ({ boards, onBtnAddBoardClick }) => {
  return (
    <div className={style['board-list']} >
      {boards.map(({ name, id }, i) => <Board key={i} name={name} id={id} />)}
      <BtnAddBoard onClick={onBtnAddBoardClick} />
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
};

export default BoardsList;
