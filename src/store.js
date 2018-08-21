import { createStore, combineReducers } from 'redux';
import filter from './reducers/filter';
import notification from './reducers/notification';
import anecdotes from './reducers/anecdotes';

const store = createStore(
  combineReducers({
    notification,
    filter,
    anecdotes
  })
);

export default store;
