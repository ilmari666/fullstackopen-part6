import React from 'react';

const Anecdote = ({ anecdote }) => {
  const { content, votes, info, author, id } = anecdote;
  return (
    <div>
      <h3>
        {content} by {author}
      </h3>
      <p>has {votes} votes</p>
      <p>
        for more info see <a href={info}>{info}</a>
      </p>
    </div>
  );
};

export default Anecdote;
