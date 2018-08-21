import React from 'react';
import { connect } from 'react-redux';
import anecdoteService from '../services/anecdotes';
import { anecdoteCreation, notify } from '../actions';

class AnecdoteForm extends React.Component {
  handleSubmit = async e => {
    e.preventDefault();
    const content = '' + e.target.anecdote.value;
    e.target.anecdote.value = '';
    const anecdote = await anecdoteService.createNew({
      content: content,
      votes: 0
    });

    this.props.anecdoteCreation(anecdote);
    this.props.notify(`You created '${content}'`);
    setTimeout(() => this.props.notify(''), 5000);
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
