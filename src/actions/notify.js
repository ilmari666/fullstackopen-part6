let timeout;

const notify = message => dispatch => {
  console.log('notify', message);
  clearTimeout(timeout);
  dispatch({
    type: 'NOTIFY',
    message
  });
  if (message !== '') {
    setTimeout(() => {
      dispatch(
        {
          type: 'NOTIFY',
          message: ''
        },
        5000
      );
    });
  }
};

export default notify;
