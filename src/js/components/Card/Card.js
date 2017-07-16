import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ description }) => <div>{description}</div>;

Card.propTypes = {
  description: PropTypes.string,
};

Card.defaultProps = {
  description: '',
};

export default Card;
