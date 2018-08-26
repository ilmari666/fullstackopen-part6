import React from 'react';
import { Message } from 'semantic-ui-react';

const Notification = ({ notification }) => {
  return notification ? <Message info>{notification}</Message> : null;
};

export default Notification;
