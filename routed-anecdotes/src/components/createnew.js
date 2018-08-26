import React from 'react';
import { Form, Button } from 'semantic-ui-react';

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>content</label>
            <input
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>author</label>
            <input
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>url for more info</label>
            <input
              name="info"
              value={this.state.info}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button>create</Button>
        </Form>
      </div>
    );
  }
}
export default CreateNew;
