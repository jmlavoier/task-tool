import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import classNames from 'classnames';

import CardForm from 'containers/Cards/components/CardForm';
import style from './Card.sass';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    console.log(props);
    return {
      id: props.id, 
    };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    console.log(props, monitor, component);
  }
};

/**
 * Specifies the props to inject into your component.
 */
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

const Card = ({ id, description, editMode, onSaveCard, onEditCard, isDragging, connectDragSource }) => {
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
