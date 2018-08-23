import React from 'react';
import { connect } from 'react-redux';
import { anecdoteCreation } from '../actions/anecdote';

class AnecdoteForm extends React.Component {
  handleSubmit = async e => {
    e.preventDefault();
    const content = '' + e.target.anecdote.value;
    e.target.anecdote.value = '';
    this.props.anecdoteCreation(content);
  };
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="anecdote" />
          </div>
          <button>create</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    anecdoteCreation
  }
)(AnecdoteForm);
