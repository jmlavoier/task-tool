import React from 'react';
import { shallow, mount } from 'enzyme';

import BtnAddBoard from './BtnAddBoard';

test('Should component render with default props', () => {
  const wrapper = shallow(<BtnAddBoard onClick={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});