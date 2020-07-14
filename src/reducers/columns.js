import {
  CHANGE_COLUMN_TITLE,
} from '../actions/action_types';

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

export default function columns(state = JSON.parse(localStorage.getItem('columns')) || mockColumns, { type, payload }) {
  if (type === CHANGE_COLUMN_TITLE) {
    return state.map((column) => (column.columnId === payload.id
      ? { ...column, title: payload.name }
      : column));
  }
  return state;
}
