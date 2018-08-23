const filterReducer = (store = '', action) => {
  if (action.type === 'FILTER') {
    console.log(action, action.filter);
    return action.filter;
  }
  return store;
};

export default filterReducer;
