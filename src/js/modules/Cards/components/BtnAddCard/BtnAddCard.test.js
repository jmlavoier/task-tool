import React from 'react';
import BtnAddCard from './BtnAddCard';
import { shallow, mount } from 'enzyme';

test('Should component render', () => {
  const wrapper = shallow(<BtnAddCard onClick={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should component call onClick', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<BtnAddCard onClick={mockFn} />);

  wrapper.simulate('click');
  expect(mockFn).toHaveBeenCalled();
})