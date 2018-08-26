import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Redirect
} from 'react-router-dom';

let anecdoteTimeout;

const Menu = () => {
  const style = {
    backgroundColor: 'grey',
    color: 'white',
    textTransform: 'uppercase',
    padding: '0.66rem'
  };
  const activeStyle = {
    fontWeight: 'bold',
    color: 'white'
  };
  return (
    <div style={style}>
      <NavLink activeStyle={activeStyle} exact to="/anecdotes">
        anecdotes
      </NavLink>
      &nbsp;
      <NavLink activeStyle={activeStyle} to="/new">
        create new
      </NavLink>
      &nbsp;
      <NavLink activeStyle={activeStyle} to="/about">
        about
      </NavLink>
      &nbsp;
    </div>
  );
};

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => (
        <Link to={`/anecdotes/${anecdote.id}`}>
          <li key={anecdote.id}>{anecdote.content}</li>
        </Link>
      ))}
    </ul>
  </div>
);

const Anecdote = ({ anecdote }) => {
  const { content, votes, info, author, id } = anecdote;
  return (
    <div>
      <h1>
        {content} by {author}
      </h1>
      <p>has {votes} votes</p>
      <p>
        for more info see <a href={info}>{info}</a>
      </p>
    </div>
  );
};

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>
      An anecdote is a brief, revealing account of an individual person or an
      incident. Occasionally humorous, anecdotes differ from jokes because their
      primary purpose is not simply to provoke laughter but to reveal a truth
      more general than the brief tale itself, such as to characterize a person
      by delineating a specific quirk or trait, to communicate an abstract idea
      about a person, place, or thing through the concrete details of a short
      narrative. An anecdote is "a story with a point."
    </em>

    <p>
      Software engineering is full of excellent anecdotes, at this app you can
      find the best and add more.
    </p>
  </div>
);

const Footer = () => (
  <div>
    Anecdote app for
    <a href="https://courses.helsinki.fi/fi/TKT21009/121540749">
      Full Stack -sovelluskehitys
    </a>
    . See
    <a href="https://github.com/mluukkai/routed-anecdotes">
      https://github.com/mluukkai/routed-anecdotes
    </a>
    for the source code.
  </div>
);

class CreateNew extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      author: '',
      info: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            content
            <input
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <div>
            author
            <input
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </div>
          <div>
            url for more info
            <input
              name="info"
              value={this.state.info}
              onChange={this.handleChange}
            />
          </div>
          <button>create</button>
        </form>
      </div>
    );
  }
}

const Notification = ({ notification }) => {
  const style = {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    border: '1px solid green',
    color: 'green',
    borderRadius: '0.5rem',
    padding: '0.5rem'
  };
  return notification ? <div style={style}>{notification}</div> : null;
};

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
      <Router>
        <div>
          <h1>Software anecdotes</h1>
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
    );
  }
}

export default App;
