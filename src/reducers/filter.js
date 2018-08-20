const filterReducer = (store = '', action) => {
  if (action.type === 'FILTER') {
    return action.filter;
  }
  return store;
};

export default filterReducer;
