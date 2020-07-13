import { combineReducers } from 'redux';
import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
  CHANGE_COLUMN_TITLE,
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

const mockComments = [
  {
    author: 'John Doe',
    cardId: 1,
    commentId: 1,
    name: 'Testing comment 1',
  },
  {
    author: 'John Doe',
    cardId: 2,
    commentId: 2,
    name: 'Testing comment 2',
  },
  {
    author: 'John Doe',
    cardId: 2,
    commentId: 3,
    name: 'Testing comment 2',
  },
];

const mockColumns = [
  {
    columnId: 0,
    title: 'TODO',
  },
  {
    columnId: 1,
    title: 'In progress',
  },
  {
    columnId: 2,
    title: 'Testing',
  },
  {
    columnId: 3,
    title: 'Done',
  },
];

function cards(state = mockCards, { type, payload }) {
  switch (type) {
    case ADD_CARD:
      return [
        ...state,
        {
          author: 'John Doe',
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

function comments(state = mockComments, { type, payload }) {
  switch (type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          author: 'John Doe',
          cardId: payload.cardId,
          commentId: Date.now(),
          name: payload.name,
        },
      ];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.commentId !== payload.id);
    case CHANGE_COMMENT:
      return state.map((comment) => (comment.commentId === payload.id
        ? { ...comment, name: payload.name }
        : comment));
    default:
      return state;
  }
}

function columns(state = mockColumns, { type, payload }) {
  if (type === CHANGE_COLUMN_TITLE) {
    return state.map((column) => (column.columnId === payload.id
      ? { ...column, title: payload.name }
      : column));
  }
  return state;
}

export default combineReducers({ columns, cards, comments });
