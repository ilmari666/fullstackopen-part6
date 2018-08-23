import React from 'react';
import { connect } from 'react-redux';
import { anecdoteFilter } from '../actions/anecdote';

class Filter extends React.Component {
  handleChange = e => {
    const filter = e.target.value;
    this.props.anecdoteFilter(filter);
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

export default connect(
  null,
  { anecdoteFilter }
)(Filter);
