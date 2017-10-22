import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import classNames from 'classnames';

import CardForm from 'modules/Cards/components/CardForm';
import style from './Card.sass';

const cardSource = {
  beginDrag(props, monitor, component) {
    return {
      id: props.id, 
    };
  },
  endDrag(props, monitor, component) {
    if (!monitor.getDropResult()) {
      return;
    }
    const { boardId } = monitor.getDropResult();
    const { id, changeBoard } = props;

    changeBoard(id, boardId);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const getClassNames = (isDragging) => classNames({
  [style.card]: true,
  [style['is-dragging']]: isDragging,
});

const Card = ({ id, description, editMode, onSaveCard, onEditCard, isDragging, connectDragSource, changeBoard }) => {
  return connectDragSource(
    <div className={getClassNames(isDragging)} onClick={() => onEditCard(id)}  >
      {editMode 
        ? <CardForm id={id} description={description} onSaveCard={onSaveCard} />
        : description}
    </div>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

export default DragSource('CARD', cardSource, collect)(Card);
