import React from 'react';
import PropTypes from 'prop-types';

import Board from 'containers/Boards/components/Board';

const BoardsList = ({ boards }) => {
  return (
    <div>
      {boards.map(({name}, i) => <Board key={i} onClick={e => {}} name={name} />)}
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
};

export default BoardsList;
