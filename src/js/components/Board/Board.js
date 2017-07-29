import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Card from 'components/Card';
import style from './Board.sass';

const Board = ({ cardsList }) => (
  <div>
    {cardsList && cardsList
      .map(item => <Card key={uid()} description={item.description} />)}
  </div>
);

Board.propTypes = {
  cardsList: PropTypes.arrayOf(PropTypes.object),
};

Board.defaultProps = {
  cardsList: [],
};

export default Board;
