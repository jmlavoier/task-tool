import React from 'react';
import PropTypes from 'prop-types';

import style from './BtnAddCard.sass';

const BtnAddCard = ({ onClick }) => (
  <button onClick={onClick} className={style['btn-add-card']} > + Add Card </button>
);

BtnAddCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnAddCard;
