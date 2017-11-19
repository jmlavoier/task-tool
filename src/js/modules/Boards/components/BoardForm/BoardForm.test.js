import React from 'react';
import { shallow, mount } from 'enzyme';
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
});

test('Should component calls onClickName on title click', () => {
  const onClickName = jest.fn();
  const id = uid();
  
  const wrapper = shallow(<BoardForm
    editMode={false}
    id={id}
    name="Testing"
    onClickName={onClickName}
  />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('button').simulate('click');
  expect(onClickName).toHaveBeenCalled();
  expect(onClickName.mock.calls[0][0]).toEqual(id);
});

test('Should component calls onFieldNameKeyup on input keypress', () => {
  const onFieldNameBlur = jest.fn();
  const id = uid();
  
  const wrapper = mount(<BoardForm
    editMode={true}
    id={id}
    name="Testing"
    onFieldNameBlur={onFieldNameBlur}
  />);

  wrapper.find('input').simulate('keyup', { keyCode: 13 });
  expect(onFieldNameBlur).toHaveBeenCalled();
});

test('Should component doesn\'t call onFieldNameKeyup on input keypress', () => {
  const onFieldNameBlur = jest.fn();
  const id = uid();
  
  const wrapper = mount(<BoardForm
    editMode={true}
    id={id}
    name="Testing"
    onFieldNameBlur={onFieldNameBlur}
  />);

  wrapper.find('input').simulate('keyup', { keyCode: 40 });
  expect(onFieldNameBlur).not.toHaveBeenCalled();
});

test('Should component call onFieldNameBlur on input blur', () => {
  const onFieldNameBlur = jest.fn();
  const id = uid();
  const name = 'Testing';
  
  const wrapper = mount(<BoardForm
    editMode={true}
    id={id}
    name={name}
    onFieldNameBlur={onFieldNameBlur}
  />);

  wrapper.find('input').simulate('blur');
  expect(onFieldNameBlur).toHaveBeenCalled();
  expect(onFieldNameBlur.mock.calls[0][0]).toEqual({ id, name });
});


test('Should component render value on input change', () => {
  const id = uid();
  
  const wrapper = shallow(<BoardForm
    editMode={true}
    id={id}
    name="Testing"
  />);

  expect(wrapper).toMatchSnapshot();
  
  wrapper.find('input').simulate('change', { target: { value: 'updated value' }});
  
  expect(wrapper).toMatchSnapshot();
});


test('Should input is focused after componentDidMount', () => {
  const id = uid();
  const mockFn = { focus: jest.fn() };

  BoardForm.focusElement(mockFn);
  expect(mockFn.focus).toHaveBeenCalled();
});