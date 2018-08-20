import React from 'react';
import { connect } from 'react-redux';
import { anecdoteCreation, notify } from '../actions';

class AnecdoteForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    this.props.anecdoteCreation(content);
    this.props.notify(`You created '${content}'`);
    setTimeout(() => this.props.notify(''), 5000);
    e.target.anecdote.value = '';
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
    anecdoteCreation,
    notify
  }
)(AnecdoteForm);
