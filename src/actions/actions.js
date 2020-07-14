import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
  CHANGE_COLUMN_TITLE,
  OPEN_CARD_MODAL,
} from './action_types';

export const addCard = (text, columnId) => ({
  type: ADD_CARD,
  payload: { text, columnId },
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

export const addComment = (cardId, name) => ({
  type: ADD_COMMENT,
  payload: { cardId, name },
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
