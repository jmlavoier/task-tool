import React from 'react';
import { shallow } from 'enzyme';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

import Card from './Card';

function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(props => <DecoratedComponent {...props} />);
}

test('Should component render with default props', () => {
  const OriginalBox = wrapInTestContext(Card);
  const identity = el => el;

  const wrapper = shallow(<OriginalBox connectDragSource={identity} />);
  
  expect(wrapper.text()).toBe('');
});


test('Should component render with props', () => {
  const OriginalBox = wrapInTestContext(Card);
  const identity = el => el;
  const description = 'Go to somewhere';
  
  const wrapper = shallow(<OriginalBox connectDragSource={identity} description={description} />);

  expect(wrapper.text()).toBe(description);
});
