import React from 'react';
import PropTypes from 'prop-types';

import Board from 'containers/Boards/components/Board';

import style from './BoardsList.sass';

const BoardsList = ({ boards }) => {
  return (
    <div className={style['board-list']} >
      {boards.map(({name}, i) => <Board key={i} onClick={e => {}} name={name} />)}
    </div>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
};

export default BoardsList;
