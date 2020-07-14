import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
} from '../constants/action_types';

export default function cards(state = [], { type, payload }) {
  switch (type) {
    case ADD_CARD:
      return [
        ...state,
        {
          author: payload.author,
          cardId: Date.now(),
          columnId: payload.columnId,
          description: '',
          name: payload.text,
        },
      ];
    case DELETE_CARD:
      return state.filter((card) => card.cardId !== payload.id);
    case CHANGE_CARD_NAME:
      return state.map((card) => (card.cardId === payload.id
        ? { ...card, name: payload.name }
        : card));
    case CHANGE_CARD_DESCRIPTION:
      return state.map((card) => (card.cardId === payload.id
        ? { ...card, description: payload.description }
        : card));
    default:
      return state;
  }
}
