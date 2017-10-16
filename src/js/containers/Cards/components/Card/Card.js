import React from 'react';
import PropTypes from 'prop-types';

import CardForm from 'containers/Cards/components/CardForm';
import style from './Card.sass';

const Card = ({ id, description, editMode, onSaveCard, onEditCard }) => {
  return (
    <div className={style.card} onClick={() => onEditCard(id)} >
      {editMode 
        ? <CardForm id={id} description={description} onSaveCard={onSaveCard} />
        : description}
    </div>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Card;
