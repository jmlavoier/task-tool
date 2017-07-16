import React from 'react';
import { shallow } from 'enzyme';

import Container from '../Container';

const mockBoardsList = [
  { name: 'To Do', cardsList: [{ description: 'Task1' }, { description: 'Task2' }] },
  { name: 'In Progress', cardsList: [{ description: 'Task3' }, { description: 'Task4' }] },
  { name: 'Done', cardsList: [{ description: 'Task5' }, { description: 'Task6' }] },
];

test('Should component render with props', () => {
  const wrapper = shallow(<Container boardsList={mockBoardsList} />);

  expect(wrapper.children()).toHaveLength(3);

  // First Board -> First Card
  expect(wrapper.childAt(0).props().cardsList[0].description)
    .toBe(mockBoardsList[0].cardsList[0].description);

  // First Board -> Second Card
  expect(wrapper.childAt(0).props().cardsList[1].description)
    .toBe(mockBoardsList[0].cardsList[1].description);

  // Second Board -> First Card
  expect(wrapper.childAt(1).props().cardsList[0].description)
    .toBe(mockBoardsList[1].cardsList[0].description);
});
