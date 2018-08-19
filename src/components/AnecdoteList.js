import React from 'react';
import { anecdoteVote } from '../reducers/anecdoteReducer';

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store
      .getState()
      .sort((a, b) => b.votes - a.votes);

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote => {
          const { id, content, votes } = anecdote;
          return (
            <div key={id}>
              <div>{content}</div>
              <div>
                has {votes}
                <button
                  onClick={() => this.props.store.dispatch(anecdoteVote(id))}
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

export default AnecdoteList;
