import React from 'react';
import { shallow, mount } from 'enzyme';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

import CardsList from './CardsList';

function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(props => <DecoratedComponent {...props} />);
}

const OriginalBox = wrapInTestContext(CardsList);
const identity = el => el;

const mockCards = [
  { id: '1', description: '1', editMode: false },
  { id: '2', description: '2', editMode: false },
  { id: '3', description: '3', editMode: false },
];
const boardId = '321';

test('Should component render with default props', () => {
  const wrapper = mount(<OriginalBox
    cards={[]}
    boardId={''}
    onBtnAddCardClick={() => {}}
    onSaveCard={() => {}}
    onEditCard={() => {}}
    changeBoard={() => {}}
  />);

  expect(wrapper).toMatchSnapshot();
});

test('Should component render cards', () => {
  const wrapper = mount(<OriginalBox
    cards={mockCards}
    boardId={boardId}
    onBtnAddCardClick={() => {}}
    onSaveCard={() => {}}
    onEditCard={() => {}}
    changeBoard={() => {}}
  />);

  expect(wrapper).toMatchSnapshot();
});

test('Should call onBtnAddCardClick', () => {
  const mockBtnAddCardClick = jest.fn();

  const wrapper = mount(<OriginalBox
    cards={mockCards}
    boardId={boardId}
    onBtnAddCardClick={mockBtnAddCardClick}
    onSaveCard={() => {}}
    onEditCard={() => {}}
    changeBoard={() => {}}
  />);

  wrapper.find('.btn-add-card').simulate('click');

  expect(mockBtnAddCardClick).toHaveBeenCalled();
  expect(mockBtnAddCardClick.mock.calls[0][0]).toEqual(boardId);
});