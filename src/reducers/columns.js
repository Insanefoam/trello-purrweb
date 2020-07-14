import {
  CHANGE_COLUMN_TITLE,
} from '../actions/action_types';

export default function columns(state = [], { type, payload }) {
  if (type === CHANGE_COLUMN_TITLE) {
    return state.map((column) => (column.columnId === payload.id
      ? { ...column, title: payload.name }
      : column));
  }
  return state;
}
