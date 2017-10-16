import { connect } from 'react-redux';

import { createCard, saveCard, editCard } from './Cards.actions';
import CardsList from './components/CardsList';

const filterCards = (cards, boardId) => cards.filter(card => card.boardId == boardId);

const mapStateToProps = ({ cards }, { boardId }) => {
  return {
    cards: filterCards(cards, boardId),
    boardId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBtnAddCardClick: boardId => dispatch(createCard(boardId)),
    onSaveCard: card => dispatch(saveCard(card)),
    onEditCard: cardId => dispatch(editCard(cardId))
  }
}

const Cards = connect(mapStateToProps, mapDispatchToProps)(CardsList);

export default Cards;