import React from 'react';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import { shallow, mount } from 'enzyme';
import uid from 'uid';

import Board from './Board';

function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(props => <DecoratedComponent {...props} />);
}

test('Should component render with props', () => {
  const OriginalBox = wrapInTestContext(Board);
  const identity = el => el;
  const propName = 'To do';
  const propId = uid();
  const wrapper = shallow(<OriginalBox id={propId} name={propName} connectDragSource={identity} />);

  expect(wrapper.prop('id')).toBe(propId);
  expect(wrapper.prop('name')).toBe(propName);
});
