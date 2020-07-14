import {
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
} from '../actions/action_types';

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
    name: 'Testing comment 3',
  },
];

export default function comments(state = JSON.parse(localStorage.getItem('comments')) || mockComments, { type, payload }) {
  switch (type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          author: localStorage.getItem('username'),
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
