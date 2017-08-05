import React from 'react';
import PropTypes from 'prop-types';

import Board from 'components/Board';

const BoardsList = ({ boards, addBoard }) => {
  console.log(boards);
  return boards.map(({name}) => <Board onClick={e => {}} name={name} />);
};

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
};

export default BoardsList;
