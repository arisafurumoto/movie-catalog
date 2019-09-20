import React from 'react';
import { Helmet } from "react-helmet";

import MovieView from '../components/MovieView';

export default class Home extends React.PureComponent {

  render () {
    return (
      <article>
        <Helmet>
          <title>The Movie Database (TMDb) | Home</title>
          <meta name="description" content="A movie catalog developed with React + Redux." />
        </Helmet>
        <div className="frame">
          <section className="centered">
            <img className="logo" src="/assets/images/logo.svg" />
          </section>
          <MovieView/>
        </div>
      </article>
    );
  }
}