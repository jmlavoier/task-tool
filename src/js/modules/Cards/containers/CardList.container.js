import uid from 'uid';
import { connect } from 'react-redux';
import { createCard, saveCard, editCard, changeBoard } from 'modules/Cards/actions/Cards.actions';
import CardsList from 'modules/Cards/components/CardsList';

export const filterCards = (cards, boardId) => cards.filter(card => card.boardId === boardId);

/* istanbul ignore next */
const mapStateToProps = ({ cards }, { boardId }) => ({
  cards: filterCards(cards, boardId),
  boardId,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  onBtnAddCardClick: boardId => dispatch(createCard(uid(), boardId)),
  onSaveCard: card => dispatch(saveCard(card)),
  onEditCard: cardId => dispatch(editCard(cardId)),
  changeBoard: (cardId, boardId) => dispatch(changeBoard(cardId, boardId)),
});

const Cards = connect(mapStateToProps, mapDispatchToProps)(CardsList);

export default Cards;
