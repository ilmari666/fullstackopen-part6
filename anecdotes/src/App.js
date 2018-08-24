import React from 'react';
import { connect } from 'react-redux';

import { anecdoteInitialization } from './actions/anecdote';
import Notification from './components/Notification';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';

class App extends React.Component {
  componentDidMount = async () => {
    this.props.anecdoteInitialization();
  };

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    );
  }
}
export default connect(
  null,
  { anecdoteInitialization }
)(App);
