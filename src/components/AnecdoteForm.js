import React from 'react';
import PropTypes from 'prop-types';
import { anecdoteCreation, notify } from '../reducers/anecdoteReducer';

class AnecdoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit = e => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    this.context.store.dispatch(anecdoteCreation(content));
    this.context.store.dispatch(notify(`You created '${content}'`));
    setTimeout(() => this.context.store.dispatch(notify('')), 5000);
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

AnecdoteForm.contextTypes = {
  store: PropTypes.object
};

export default AnecdoteForm;
