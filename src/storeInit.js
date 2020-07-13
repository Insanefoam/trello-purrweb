import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

const casher = () => {
  const state = store.getState();
  for (const key in state) {
    localStorage.setItem(key, JSON.stringify(state[key]));
  }
};
store.subscribe(casher);

export default store;
