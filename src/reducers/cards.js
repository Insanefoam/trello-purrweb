import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
} from '../actions/action_types';

const mockCards = [
  {
    author: 'John Doe',
    cardId: 1,
    columnId: 0,
    description: 'Mock description 1',
    name: 'Testing card 1',
  },
  {
    author: 'John Lennon',
    cardId: 2,
    columnId: 1,
    description: 'Mock description 2',
    name: 'Testing card 2',
  },
];

export default function cards(state = JSON.parse(localStorage.getItem('cards')) || mockCards, { type, payload }) {
  switch (type) {
    case ADD_CARD:
      return [
        ...state,
        {
          author: localStorage.getItem('username'),
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
