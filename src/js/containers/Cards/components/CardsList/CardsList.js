import React from 'react';
import PropTypes from 'prop-types';

import Card from 'containers/Cards/components/Card';
import BtnAddCard from 'containers/Cards/components/BtnAddCard';

import style from './CardsList.sass';

const CardsList = ({ cards, boardId, onBtnAddCardClick, onSaveCard, onEditCard, changeBoard }) => {
  return (
  <ul className={style['cards-list']}>
    {cards.map(({ id, description, editMode }, i) => <Card 
      key={i} 
      id={id}
      description={description} 
      onSaveCard={onSaveCard} 
      onEditCard={onEditCard}
      editMode={editMode}
      changeBoard={changeBoard}
    />)}
    <BtnAddCard onClick={() => onBtnAddCardClick(boardId)} />
  </ul>
)};

CardsList.propTypes = {
  cards: PropTypes.array.isRequired,
  onBtnAddCardClick: PropTypes.func.isRequired, 
}

export default CardsList;