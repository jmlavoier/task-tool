import React from 'react';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import { shallow, mount } from 'enzyme';
import uid from 'uid';

import { Board, getClassNames } from './Board';

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

test('Should getClassNames return string', () => {
  const isOver = false;
  const value = getClassNames(isOver);

  expect(typeof value).toBe('string');
});

test('Should getClassNames return class board', () => {
  const isOver = false;
  const value = getClassNames(isOver);

  expect(value).toBe('board');
});


test('Should getClassNames contain class is-over', () => {
  const isOver = true;
  const value = getClassNames(isOver);

  expect(value).toContain('is-over');
});
