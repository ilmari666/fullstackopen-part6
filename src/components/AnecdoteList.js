import React from 'react';
import { connect } from 'react-redux';
import anecdoteService from '../services/anecdotes';
import { anecdoteVote, notify } from '../actions';

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
                  const voted = {
                    ...anecdote,
                    votes: anecdote.votes + 1
                  };
                  anecdoteService.vote(voted);
                  anecdoteVote(voted);
                  notify(`You voted '${content}'`);
                  setTimeout(() => notify(''), 5000);
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
