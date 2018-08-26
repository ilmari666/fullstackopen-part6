import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Header } from 'semantic-ui-react';
const AnecdoteList = ({ anecdotes }) => (
  <div>
    <Header size="large">Anecdotes</Header>
    <Table basic="very" striped>
      <Table.Body>
        {anecdotes.map(anecdote => (
          <Table.Row key={anecdote.id}>
            <Table.Cell>
              <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);

export default AnecdoteList;
