export const anecdoteCreation = content => ({
  type: 'CREATE',
  content
});
export const anecdoteVote = id => ({
  type: 'VOTE',
  id
});
export const anecdoteFilter = filter => ({
  type: 'FILTER',
  filter
});
export const notify = message => ({
  type: 'NOTIFY',
  message
});
