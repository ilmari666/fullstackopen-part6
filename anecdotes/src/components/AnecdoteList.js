import React from 'react';
import { connect } from 'react-redux';
import { anecdoteVote } from '../actions/anecdote';
import notify from '../actions/notify';

const AnecdoteList = props => {
  const { anecdotesToShow, anecdoteVote, notify } = props;
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesToShow.map(anecdote => {
        const { id, content, votes } = anecdote;
        return (
          <div key={id}>
            <div>{content}</div>
            <div>
              has {votes}
              <button
                onClick={async () => {
                  anecdoteVote(anecdote);
                  notify(`You voted ${anecdote.content}`, 5);
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
};

function filterAndSortAnecdotes(anecdotes, filter) {
  const filteredAnecdotes =
    filter === ''
      ? anecdotes
      : anecdotes.filter(anecdote => anecdote.content.indexOf(filter) !== -1);
  return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
}

const mapStateToProps = state => ({
  anecdotesToShow: filterAndSortAnecdotes(state.anecdotes, state.filter)
});

export default connect(
  mapStateToProps,
  { anecdoteVote, notify }
)(AnecdoteList);
