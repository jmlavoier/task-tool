import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

import Card from 'modules/Cards/components/Card';
import BtnAddCard from 'modules/Cards/components/BtnAddCard';

import style from './CardsList.sass';

const CardsList = ({ cards, boardId, onBtnAddCardClick, onSaveCard, onEditCard, changeBoard }) => (
  <ul className={style['cards-list']}>
    {cards.map(({ id, description, editMode }) => (<Card
      key={uid()}
      id={id}
      description={description}
      onSaveCard={onSaveCard}
      onEditCard={onEditCard}
      editMode={editMode}
      changeBoard={changeBoard}
    />))}
    <BtnAddCard onClick={() => onBtnAddCardClick(boardId)} />
  </ul>
);

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  boardId: PropTypes.string.isRequired,
  onBtnAddCardClick: PropTypes.func.isRequired,
  onSaveCard: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
  changeBoard: PropTypes.func.isRequired,
};

export default CardsList;
