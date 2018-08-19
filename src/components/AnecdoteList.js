import React from 'react';
import PropTypes from 'prop-types';
import { anecdoteVote, notify } from '../reducers/anecdoteReducer';

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { anecdotes, filter } = this.context.store.getState();
    const filteredAnecdotes =
      filter === ''
        ? anecdotes
        : anecdotes
            .filter(anecdote => anecdote.content.indexOf(filter) !== -1)
            .sort((a, b) => b.votes - a.votes);

    return (
      <div>
        <h2>Anecdotes</h2>
        {filteredAnecdotes.map(anecdote => {
          const { id, content, votes } = anecdote;
          return (
            <div key={id}>
              <div>{content}</div>
              <div>
                has {votes}
                <button
                  onClick={() => {
                    this.context.store.dispatch(anecdoteVote(id));
                    this.context.store.dispatch(
                      notify(`You voted '${content}'`)
                    );
                    setTimeout(
                      () => this.context.store.dispatch(notify('')),
                      5000
                    );
                  }}
                >
                  vote
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
};

export default AnecdoteList;
