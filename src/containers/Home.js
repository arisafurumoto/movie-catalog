import React from 'react';
import PropTypes from 'prop-types';
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
          <section>
            <form>
              <label className="search-label" htmlFor="search">
                <span>Search</span>
              </label>
              <input id="search" type="text"/>
              <input className="button" type="button" value="Search" />
            </form>
          </section>
          <MovieView/>
        </div>
      </article>
    );
  }
}