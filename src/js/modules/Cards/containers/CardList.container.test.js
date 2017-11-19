import React from 'react';
import { filterCards } from './CardList.container';

const boardsId = ['123', '456', '789'];

const mockCards = [
  { id: '1', description: '1', boardId: boardsId[0] },
  { id: '2', description: '2', boardId: boardsId[0] },
  { id: '3', description: '3', boardId: boardsId[0] },
  { id: '4', description: '4', boardId: boardsId[0] },
  { id: '5', description: '5', boardId: boardsId[1] },
  { id: '6', description: '6', boardId: boardsId[1] },
  { id: '7', description: '7', boardId: boardsId[2] },
];


test('Should function return cards by boardId 123', () => {
  expect(filterCards(mockCards, boardsId[0])).toHaveLength(4);
});

test('Should function return cards by boardId 456', () => {
  expect(filterCards(mockCards, boardsId[1])).toHaveLength(2);
});

test('Should function return cards by boardId 789', () => {
  expect(filterCards(mockCards, boardsId[2])).toHaveLength(1);
});

test('Should function return empty array', () => {
  expect(filterCards(mockCards, '111')).toHaveLength(0);
});