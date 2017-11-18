import React from 'react';
import { shallow } from 'enzyme';
import BoardForm from './BoardForm';

import uid from 'uid';


test('Should component render with default props', () => {
  const wrapper = shallow(<BoardForm
    editMode={false}
    id={uid()}
    name='Testing'
  />);

  expect(wrapper).toMatchSnapshot();

});

test('Should component render input on edit mode', () => {
  const wrapper = shallow(<BoardForm
    editMode={true}
    id={uid()}
    name='Testing'
  />);

  expect(wrapper).toMatchSnapshot();
})