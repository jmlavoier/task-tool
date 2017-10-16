import React from 'react';
import PropTypes from 'prop-types';

import Board from 'containers/Boards/components/Board';
import BtnAddBoard from 'containers/Boards/components/BtnAddBoard';

import style from './BoardsList.sass';

const BoardsList = ({ boards, onBtnAddBoardClick, onFieldNameBlur, onClickName }) => {
  return (
    <div className={style['board-list']} >
      {boards.map(({ name, id, editMode }, i) => {
        return (
          <Board key={i} name={name} id={id} editMode={editMode} onFieldNameBlur={onFieldNameBlur} onClickName={onClickName} />
        );
      })}
      <BtnAddBoard onClick={onBtnAddBoardClick} />
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
};

export default BoardsList;
