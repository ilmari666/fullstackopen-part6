import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import filter from './reducers/filter';
import notification from './reducers/notification';
import anecdotes from './reducers/anecdotes';

const store = createStore(
  combineReducers({
    notification,
    filter,
    anecdotes
  }),
  applyMiddleware(thunk)
);

export default store;
