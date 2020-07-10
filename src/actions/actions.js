import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
  CHANGE_COLUMN_TITLE,
} from './action_types';

export const addCard = (text, columnId) => ({
  type: ADD_CARD,
  payload: { text, columnId },
});

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  payload: id,
});

export const changeCardName = (id, text) => ({
  type: CHANGE_CARD_NAME,
  payload: { id, text },
});

export const changeCardDescription = (id, text) => ({
  type: CHANGE_CARD_DESCRIPTION,
  payload: { id, text },
});

export const addComment = (text) => ({
  type: ADD_COMMENT,
  payload: text,
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});

export const changeComment = (id, text) => ({
  type: CHANGE_COMMENT,
  payload: { id, text },
});

export const changeColumnTitle = (id, text) => ({
  type: CHANGE_COLUMN_TITLE,
  payload: { id, text },
});
