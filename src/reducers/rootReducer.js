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
    description: '',
    name: 'Testing card 1',
  },
  {
    author: 'John Lennon',
    cardId: 2,
    columnId: 1,
    description: '',
    name: 'Testing card 1',
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

function cards(state = mockCards, action) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          author: 'John Doe',
          cardId: Date.now(),
          columnId: action.payload.columnId,
          description: '',
          name: action.payload.text,
        },
      ];
    case DELETE_CARD:
      return state.filter((card) => card.cardId !== action.payload.id);
    case CHANGE_CARD_NAME:
      return state.map((card) => (card.cardId === action.payload.id
        ? { ...card, name: action.payload.name }
        : card));
    case CHANGE_CARD_DESCRIPTION:
      return state.map((card) => (card.cardId === action.payload.id
        ? { ...card, description: action.payload.description }
        : card));
    default:
      return state;
  }
}

function comments(state = mockComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          author: 'John Doe',
          cardId: action.payload.cardId,
          commentId: Date.now(),
          name: action.payload.name,
        },
      ];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.commentId !== action.payload.id);
    case CHANGE_COMMENT:
      return state.map((comment) => (comment.commentId === action.payload.id
        ? { ...comment, name: action.payload.name }
        : comment));
    default:
      return state;
  }
}

function columns(state = mockColumns, { type, payload }) {
  if (type === CHANGE_COLUMN_TITLE) {
    return state.map((column) => (column.columnId === payload.id ? { ...column, title: payload.name } : column));
  }
  return state;
}

export default combineReducers({ columns, cards, comments });
