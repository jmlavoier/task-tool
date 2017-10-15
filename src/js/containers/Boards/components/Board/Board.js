import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Card from 'containers/Cards/components/Card';
import style from './Board.sass';

const Board = ({ name }) => (
  <div>
    {name}
  </div>
);

Board.propTypes = {
  cardsList: PropTypes.arrayOf(PropTypes.object),
};

Board.defaultProps = {
  cardsList: [],
};

export default Board;
