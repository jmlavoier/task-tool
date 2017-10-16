import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import BoardForm from 'containers/Boards/components/BoardForm';
import Cards from 'containers/Cards';
import style from './Board.sass';

const Board = ({ name, id, editMode, onFieldNameBlur, onClickName }) => (
  <div className={style.board} >
    <BoardForm editMode={editMode} id={id} name={name} onFieldNameBlur={onFieldNameBlur} onClickName={onClickName} />
    <Cards boardId={id} />
  </div>
);

Board.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Board;
