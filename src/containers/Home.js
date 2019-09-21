import React from 'react';
import { Helmet } from "react-helmet";

import MovieView from '../components/MovieView';
import "./Home.scss";

export default class Home extends React.PureComponent {

  render () {
    return (
      <article className="home">
        <Helmet>
          <title>Home | The Movie Database (TMDb)</title>
          <meta name="description" content="A movie catalog developed with React + Redux." />
        </Helmet>
        <section className="logo-wrap">
          <img className="logo" src="/assets/images/logo.svg" alt="The Movie DB logo" />
        </section>
        <div className="frame">
          <MovieView/>
        </div>
      </article>
    );
  }
}