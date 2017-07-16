import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Board from 'components/Board';

const Container = ({ boardsList }) => (
  <div>{ boardsList && boardsList
    .map(item => <Board key={uid()} cardsList={item.cardsList} />)}</div>
);

Container.propTypes = {
  boardsList: PropTypes.arrayOf(PropTypes.object),
};

Container.defaultProps = {
  boardsList: [],
};

export default Container;
