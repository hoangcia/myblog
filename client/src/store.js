import { createStore, combineReducers } from 'redux';

import { home, about } from './reducers';

const reducers = combineReducers({
  home,
  about
});

const store = createStore(reducers);

export default store;
