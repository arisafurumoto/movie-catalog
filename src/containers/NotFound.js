import React from 'react';

export default class NotFound extends React.PureComponent {

  render () {
    return (
      <article className="home">
        <section className="logo-wrap">
          <img className="logo" src="/assets/images/logo.svg" alt="The Movie DB logo" />
        </section>
        <div className="frame">
          <div className="center">
            <h1>Page not found</h1>
          </div>
        </div>
      </article>
    );
  }
}