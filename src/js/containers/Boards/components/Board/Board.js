import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Card from 'containers/Cards';
import style from './Board.sass';

const Board = ({ name }) => (
  <div className={style.board} >
    <h4>{name}</h4>

  </div>
);

Board.propTypes = {
  cardsList: PropTypes.arrayOf(PropTypes.object),
};

Board.defaultProps = {
  cardsList: [],
};

export default Board;
