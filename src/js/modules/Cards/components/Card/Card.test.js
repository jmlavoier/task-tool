import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

test('Should component render with default props', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.text()).toBe('');
});


test('Should component render with props', () => {
  const description = 'Go to somewhere';
  const wrapper = shallow(<Card description={description} />);

  expect(wrapper.text()).toBe(description);
});
