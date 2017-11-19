import React from 'react';
import uid from 'uid';
import { shallow, mount } from 'enzyme';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import CardForm from 'modules/Cards/components/CardForm';

import Card from './Card';

function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(props => <DecoratedComponent {...props} />);
}

const OriginalBox = wrapInTestContext(Card);
const identity = el => el;

test('Should component render description', () => {
  const id = '123'
  const description = 'Testing anything';

  const wrapper = mount(<OriginalBox 
    connectDragSource={identity} 
    id={id} 
    onSaveCard={() => {}} 
    onEditCard={() => {}} 
    editMode={false}
    description={description} />);
  
  expect(wrapper).toMatchSnapshot();
});

test('Should component render CardForm', () => {
  const wrapper = mount(<OriginalBox connectDragSource={identity} id={uid()} editMode onSaveCard={() => {}} onEditCard={() => {}} description="" />);

  expect(wrapper.find(CardForm)).toHaveLength(1);
});

test('Should component call onEditCard on click', () => {
  const id = '123'
  const description = 'Testing anything';
  const mockOnEditCard = jest.fn();

  const wrapper = mount(<OriginalBox 
    connectDragSource={identity} 
    id={id} 
    onSaveCard={() => {}} 
    onEditCard={mockOnEditCard} 
    editMode={true}
    description={description} />);

  wrapper.simulate('click');
  expect(mockOnEditCard).toHaveBeenCalled();
  expect(mockOnEditCard.mock.calls[0][0]).toEqual(id);
});