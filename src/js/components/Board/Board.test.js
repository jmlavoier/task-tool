import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

const mockCardsList = [
  { description: 'Task 1' },
  { description: 'Task 2' },
];

test('Should component render with props', () => {
  const wrapper = shallow(<Board cardsList={mockCardsList} />);

  expect(wrapper.children()).toHaveLength(2);
  expect(wrapper.childAt(0).prop('description')).toBe(mockCardsList[0].description);
  expect(wrapper.childAt(1).prop('description')).toBe(mockCardsList[1].description);
});
