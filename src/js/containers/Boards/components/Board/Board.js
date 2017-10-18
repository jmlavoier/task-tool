import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';
import { DropTarget } from 'react-dnd';

import BoardForm from 'containers/Boards/components/BoardForm';
import Cards from 'containers/Cards';
import style from './Board.sass';

function collect(connect, monitor) {
  console.log('board');
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

const Board = ({ name, id, editMode, onFieldNameBlur, onClickName }) => (
  <div className={style.board} >
    <BoardForm editMode={editMode} id={id} name={name} onFieldNameBlur={onFieldNameBlur} onClickName={onClickName} />
    <Cards boardId={id} />
  </div>
);

Board.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DropTarget('CARD', {}, collect)(Board);
