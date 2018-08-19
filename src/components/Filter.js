import React from 'react';
import PropTypes from 'prop-types';
import { anecdoteFilter } from '../reducers/anecdoteReducer';

class Filter extends React.Component {
  handleChange = e => {
    const filter = e.target.value;
    this.context.store.dispatch(anecdoteFilter(filter));
  };
  render() {
    const style = {
      marginBottom: 10
    };

    return (
      <div style={style}>
        filter <input onChange={this.handleChange} />
      </div>
    );
  }
}

Filter.contextTypes = {
  store: PropTypes.object
};

export default Filter;
