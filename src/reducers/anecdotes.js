const anecdoteReducer = (store = [], action) => {
  if (action.type === 'VOTE') {
    const old = store.filter(a => a.id !== action.content.id);
    const voted = action.content;
    return [...old, voted];
  }
  if (action.type === 'CREATE') {
    return [...store, action.content];
  }

  if (action.type === 'INIT_ANECDOTES') {
    return [...store, ...action.data];
  }

  return store;
};

export default anecdoteReducer;
