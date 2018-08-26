import React from 'react';

const Notification = ({ notification }) => {
  const style = {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: '1px solid green',
    color: 'green',
    borderRadius: '0.5rem',
    padding: '0.5rem'
  };
  return notification ? <div style={style}>{notification}</div> : null;
};

export default Notification;
