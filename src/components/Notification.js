import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { notification } = this.context.store.getState();
    if (notification === '') {
      return null;
    }
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    };
    return <div style={style}>{notification}</div>;
  }
}

Notification.contextTypes = {
  store: PropTypes.object
};

export default Notification;
