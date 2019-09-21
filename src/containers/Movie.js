import React from 'react';

import MovieDetails from '../components/MovieDetails';

export default class Movie extends React.PureComponent {

  render () {
    return (
      <article>
        <MovieDetails/>
      </article>
    );
  }
}