const getId = () => `${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}`;

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

const anecdoteReducer = (store = [], action) => {
  if (action.type === 'VOTE') {
    const old = store.filter(a => a.id !== action.id);
    const voted = store.find(a => a.id === action.id);
    return [...old, { ...voted, votes: voted.votes + 1 }];
  }
  if (action.type === 'CREATE') {
    return [...store, asObject(action.content)];
  }
  return store;
};

export default anecdoteReducer;
