import React from 'react';
import PropTypes from 'prop-types';

import style from './BtnAddBoard.sass';

const BtnAddBoard = ({ onClick }) => (
  <button onClick={onClick} className={style['btn-add-board']} > + Add Board </button>
);

BtnAddBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnAddBoard;

