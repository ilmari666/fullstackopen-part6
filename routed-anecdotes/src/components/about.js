import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const About = () => (
  <div>
    <h2>About anecdote app</h2>

    <Grid divided columns={3}>
      <Grid.Row>
        <Grid.Column>
          <p>According to Wikipedia:</p>
          <p>
            <em>
              An anecdote is a brief, revealing account of an individual person
              or an incident. Occasionally humorous, anecdotes differ from jokes
              because their primary purpose is not simply to provoke laughter
              but to reveal a truth more general than the brief tale itself,
              such as to characterize a person by delineating a specific quirk
              or trait, to communicate an abstract idea about a person, place,
              or thing through the concrete details of a short narrative. An
              anecdote is "a story with a point."
            </em>
          </p>
          <p>
            Software engineering is full of excellent anecdotes, at this app you
            can find the best and add more.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/d/da/Konrad_Zuse_%281992%29.jpg" />
          By Wolfgang Hunscher, Dortmund - Own work, CC BY-SA 3.0,{' '}
          <a href="https://commons.wikimedia.org/w/index.php?curid=620905">
            https://commons.wikimedia.org/w/index.php?curid=620905
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default About;
