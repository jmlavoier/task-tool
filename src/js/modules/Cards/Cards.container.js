import { connect } from 'react-redux';

import { createCard, saveCard, editCard, changeBoard } from './Cards.actions';
import CardsList from './components/CardsList';

const filterCards = (cards, boardId) => cards.filter(card => card.boardId === boardId);

const mapStateToProps = ({ cards }, { boardId }) => ({
  cards: filterCards(cards, boardId),
  boardId,
});

const mapDispatchToProps = dispatch => ({
  onBtnAddCardClick: boardId => dispatch(createCard(boardId)),
  onSaveCard: card => dispatch(saveCard(card)),
  onEditCard: cardId => dispatch(editCard(cardId)),
  changeBoard: (cardId, boardId) => dispatch(changeBoard(cardId, boardId)),
});

const Cards = connect(mapStateToProps, mapDispatchToProps)(CardsList);

export default Cards;
