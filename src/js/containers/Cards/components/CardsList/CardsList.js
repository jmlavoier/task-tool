import React from 'react';
import PropTypes from 'prop-types';

import Card from 'containers/Cards/components/Card';
import BtnAddCard from 'containers/Cards/components/BtnAddCard';

import style from './CardsList.sass';

const CardsList = ({ cards, boardId, onBtnAddCardClick }) => (
  <ul className={style['cards-list']}>
    {cards.map(({ description }, i) => <Card key={i} description={description} />)}
    <BtnAddCard onClick={() => onBtnAddCardClick(boardId)} />
  </ul>
);

CardsList.propTypes = {
  cards: PropTypes.array.isRequired,
  onBtnAddCardClick: PropTypes.func.isRequired, 
}

export default CardsList;