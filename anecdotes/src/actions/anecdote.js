import anecdoteService from '../services/anecdotes';

export const anecdoteCreation = content => async dispatch => {
  const anecdote = await anecdoteService.createNew(content);
  dispatch({
    type: 'CREATE',
    content: anecdote
  });
};

export const anecdoteInitialization = () => async dispatch => {
  const anecdotes = await anecdoteService.getAll();
  dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes
  });
};

export const anecdoteVote = anecdote => async dispatch => {
  const voted = {
    ...anecdote,
    votes: anecdote.votes + 1
  };

  anecdoteService.update(voted);
  dispatch({
    type: 'VOTE',
    content: voted
  });
};

export const anecdoteFilter = filter => ({
  type: 'FILTER',
  filter
});
