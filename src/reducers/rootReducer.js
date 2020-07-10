import { combineReducers, createStore } from 'redux';
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

const mockCards = [{
  author: 'John Doe',
  cardId: 1,
  columnId: 0,
  description: '',
  name: 'Testing card 1',
},
{
  author: 'John Lennon',
  cardId: 2,
  columnId: 0,
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
];

function cardsReducer(state = mockCards, action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, {
        author: 'John Doe',
        cardId: Date.now(),
        columnId: action.payload.columnId,
        description: '',
        name: action.payload.text,
      }];
    default:
      return state;
  }
}

function commentsReducer(state = mockComments, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({ cardsReducer, commentsReducer });
const store = createStore(rootReducer);
export default store;
