import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';
import About from './components/about';
import Anecdote from './components/anecdote';
import AnecdoteList from './components/anecdotelist';
import CreateNew from './components/createnew';
import Footer from './components/footer';
import Menu from './components/menu';
import Notification from './components/notification';

let anecdoteTimeout;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info:
            'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: ''
    };
  }

  addNew = anecdote => {
    anecdote.id = (Math.random() * 10000).toFixed(0);
    this.setState({
      anecdotes: this.state.anecdotes.concat(anecdote),
      notification: `A new anecdote "${anecdote.content}" has been created!`
    });
    clearTimeout(anecdoteTimeout);
    anecdoteTimeout = setTimeout(() => {
      this.setState({ notification: '' });
    }, 10000);
  };

  anecdoteById = id => this.state.anecdotes.find(a => a.id === id);

  vote = id => {
    const anecdote = this.anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    const anecdotes = this.state.anecdotes.map(a => (a.id === id ? voted : a));

    this.setState({ anecdotes });
  };

  render() {
    return (
      <Container>
        <Router>
          <div>
            <Header as="h1">Software anecdotes</Header>
            <Menu />
            <Notification notification={this.state.notification} />
            <Route exact path="/" render={() => <Redirect to="/anecdotes" />} />

            <Route
              exact
              path="/anecdotes"
              render={() => <AnecdoteList anecdotes={this.state.anecdotes} />}
            />
            <Route
              exact
              path="/anecdotes/:id"
              render={({ match }) => (
                <Anecdote anecdote={this.anecdoteById(match.params.id)} />
              )}
            />
            <Route exact path="/about" render={() => <About />} />
            <Route
              exact
              path="/new"
              render={({ history }) => (
                <CreateNew addNew={this.addNew} history={history} />
              )}
            />
            <Footer />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
