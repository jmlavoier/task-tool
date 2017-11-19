import React from 'react';
import { shallow, mount } from 'enzyme';

import CardForm from './CardForm';

test('Should component render with default props', () => {
  const id = '';
  const description = '';
  const wrapper = shallow(<CardForm 
      id={id}
      description={description}
      onSaveCard={() => {}}
  />);

  expect(wrapper).toMatchSnapshot();
});

test('Should component call onSaveCard on blur', () => {
  const id = '123';
  const description = 'Testing';
  const mockOnSaveCard = jest.fn();

  const wrapper = shallow(<CardForm 
      id={id}
      description={description}
      onSaveCard={mockOnSaveCard}
  />);

  wrapper.simulate('blur');
  expect(mockOnSaveCard).toHaveBeenCalled();
  expect(mockOnSaveCard.mock.calls[0][0]).toEqual({id, description });
});


test('Should component call onSaveCard on keydown Enter', () => {
  const id = '123';
  const description = 'Testing';
  const mockOnSaveCard = jest.fn();

  const wrapper = mount(<CardForm
    id={id}
    description={description}
    onSaveCard={mockOnSaveCard}
  />);

  wrapper.simulate('keydown', { keyCode: 13 });
  expect(mockOnSaveCard).toHaveBeenCalled();
  expect(mockOnSaveCard.mock.calls[0][0]).toEqual({id, description });
});


test('Should component doesn\'t call onSaveCard on keydown any key', () => {
  const id = '123';
  const description = 'Testing';
  const mockOnSaveCard = jest.fn();

  const wrapper = mount(<CardForm
    id={id}
    description={description}
    onSaveCard={mockOnSaveCard}
  />);

  wrapper.simulate('keydown', { keyCode: 40 });
  expect(mockOnSaveCard).not.toHaveBeenCalled();
});


test('Should component change description', () => {
  const id = '123';
  const description = 'Testing';
  const mockOnSaveCard = jest.fn();

  const wrapper = mount(<CardForm
    id={id}
    description={description}
    onSaveCard={mockOnSaveCard}
  />);
  expect(wrapper).toMatchSnapshot();
  
  wrapper.simulate('change', { target: { value: 'Description changed' } });
  expect(wrapper).toMatchSnapshot();
  
});