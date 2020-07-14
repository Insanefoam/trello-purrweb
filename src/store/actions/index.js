import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
  CHANGE_COLUMN_TITLE,
  INIT_USER,
} from '../constants/action_types';

export const addCard = (text, columnId, author) => ({
  type: ADD_CARD,
  payload: { text, columnId, author },
});

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  payload: { id },
});

export const changeCardName = (id, name) => ({
  type: CHANGE_CARD_NAME,
  payload: { id, name },
});

export const changeCardDescription = (id, description) => ({
  type: CHANGE_CARD_DESCRIPTION,
  payload: { id, description },
});

export const addComment = (cardId, name, author) => ({
  type: ADD_COMMENT,
  payload: { cardId, name, author },
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: { id },
});

export const changeComment = (id, name) => ({
  type: CHANGE_COMMENT,
  payload: { id, name },
});

export const changeColumnTitle = (id, name) => ({
  type: CHANGE_COLUMN_TITLE,
  payload: { id, name },
});

export const initUser = (username) => ({
  type: INIT_USER,
  payload: { username },
});
