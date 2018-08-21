export const anecdoteCreation = content => ({
  type: 'CREATE',
  content
});
export const anecdoteInitialization = data => ({
  type: 'INIT_ANECDOTES',
  data
});
export const anecdoteVote = anecdote => ({
  type: 'VOTE',
  content: anecdote
});
export const anecdoteFilter = filter => ({
  type: 'FILTER',
  filter
});
export const notify = message => ({
  type: 'NOTIFY',
  message
});
