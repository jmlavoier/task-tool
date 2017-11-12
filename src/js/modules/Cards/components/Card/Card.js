import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import classNames from 'classnames';

import CardForm from 'modules/Cards/components/CardForm';
import style from './Card.sass';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
  endDrag(props, monitor) {
    if (!monitor.getDropResult()) {
      return;
    }
    const { boardId } = monitor.getDropResult();
    const { id, changeBoard } = props;

    changeBoard(id, boardId);
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const getClassNames = isDragging => classNames({
  [style.card]: true,
  [style['is-dragging']]: isDragging,
});

const Card = ({ id, description, editMode, onSaveCard, onEditCard, isDragging, connectDragSource }) => connectDragSource(
  <div role="presentation" className={getClassNames(isDragging)} onClick={() => onEditCard(id)} >
    {editMode
        ? <CardForm id={id} description={description} onSaveCard={onSaveCard} />
        : description}
  </div>,
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onSaveCard: PropTypes.func.isRequired,
  onEditCard: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

Card.defaultProps = {
  editMode: false,
};

export default DragSource('CARD', cardSource, collect)(Card);
