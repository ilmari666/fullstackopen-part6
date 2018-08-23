let timeout;

const notify = (message, duration = 3) => dispatch => {
  clearTimeout(timeout);
  dispatch({
    type: 'NOTIFY',
    message
  });
  if (message !== '') {
    setTimeout(() => {
      dispatch({
        type: 'NOTIFY',
        message: ''
      });
    }, duration * 1000);
  }
};

export default notify;
