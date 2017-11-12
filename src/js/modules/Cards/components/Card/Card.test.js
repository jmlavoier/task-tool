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

test('Should component render with default props', () => {
  const OriginalBox = wrapInTestContext(Card);
  const identity = el => el;
  const description = 'Testing anything';

  const wrapper = mount(<OriginalBox connectDragSource={identity} id={uid()} onSaveCard={() => {}} onEditCard={() => {}} description={description} />);
  
  expect(wrapper.text()).toBe(description);
});


test('Should component render with props', () => {
  const OriginalBox = wrapInTestContext(Card);
  const identity = el => el;
  const description = 'Go to somewhere';
  
  const wrapper = mount(<OriginalBox connectDragSource={identity} id={uid()} onSaveCard={() => {}} onEditCard={() => {}} description={description} />);

  expect(wrapper.text()).toBe(description);
});


test('Should component render CardForm', () => {
  const OriginalBox = wrapInTestContext(Card);
  const identity = el => el;
  
  const wrapper = mount(<OriginalBox connectDragSource={identity} id={uid()} editMode onSaveCard={() => {}} onEditCard={() => {}} description="" />);

  expect(wrapper.find(CardForm)).toHaveLength(1);
})