import { createStore, combineReducers } from 'redux';
import filter from './reducers/filter';
import notification from './reducers/notification';
import anecdotes from './reducers/anecdotes';
import anecdoteService from './services/anecdotes';

const store = createStore(
  combineReducers({
    notification,
    filter,
    anecdotes
  })
);

anecdoteService.getAll().then(anecdotes =>
  anecdotes.forEach(anecdote => {
    store.dispatch({ type: 'CREATE', content: anecdote.content }); // only use content for now
  })
);

export default store;
