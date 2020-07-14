import {
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
} from '../constants/action_types';

export default function comments(state = [], { type, payload }) {
  switch (type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          author: payload.author,
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
