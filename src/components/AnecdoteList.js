import React from 'react';
import { connect } from 'react-redux';
import { anecdoteVote, notify } from '../reducers/anecdoteReducer';

function filterAndSortAnecdotes(anecdotes, filter) {
  return (filter === ''
    ? anecdotes
    : anecdotes.filter(anecdote => anecdote.content.indexOf(filter) !== -1)
  ).sort((a, b) => b.votes - a.votes);
}

class AnecdoteList extends React.Component {
  render() {
    const { anecdotes, filter } = this.props;
    const filteredAnecdotes = filterAndSortAnecdotes(anecdotes, filter);

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
                    this.props.anecdoteVote(id);
                    this.props.notify(`You voted '${content}'`);
                    setTimeout(() => this.props.notify(''), 5000);
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

const mapStateToProps = state => ({
  anecdotes: state.anecdotes,
  filter: state.filter
});

export default connect(
  mapStateToProps,
  { anecdoteVote, notify }
)(AnecdoteList);
