import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

const Container = ({ boards }) => {
  return (
    <ul> 
        {boards.map((b, i) => <li key={i}>{b.name}</li>)}
    </ul>
  );
}

Container.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Container;
