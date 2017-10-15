import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Cards from 'containers/Cards';
import style from './Board.sass';

const Board = ({ name, id }) => (
  <div className={style.board} >
    <h4>{name}</h4>
    <Cards boardId={id} />
  </div>
);

Board.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Board;
