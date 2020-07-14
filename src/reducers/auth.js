import { INIT_USER } from '../store/constants/action_types';

export default function auth(state = { username: '' }, { type, payload }) {
  if (type === INIT_USER) { return { username: payload.username }; }
  return state;
}
