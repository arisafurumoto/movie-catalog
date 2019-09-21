import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { connect } from 'react-redux';

import { getDetailsSuccess, getDetailsLoading, getDetailsError } from '../reducers';
import LoadingSpinner from './LoadingSpinner';
import getDetailsAction from '../middleware/getDetails';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind( this );
  }
  componentDidMount () {
    const { getDetails } = this.props;
    getDetails(window.location.pathname.split("/").slice(-1)[0]);
  }

  shouldComponentRender() {
    const {loading} = this.props;
    if(this.loading === false) return false;
    return true;
  }

  render () {
    const { loading, error, details} = this.props;
    if ( !this.shouldComponentRender() ) return <LoadingSpinner />

    if ( details.release_date ) {
      details.release_date = details.release_date.slice( 0, 4 );
      details.vote_average = details.vote_average * 10;
      details.runtime = Math.floor(details.runtime / 60) + 'h ' + details.runtime % 60 + 'min';
    }

    return (
      <div className="frame">
        <Helmet>
          <title>{`The Movie Database (TMDb) | ${ details.title }`}</title>
          <meta name="description" content={ details.overview } />
        </Helmet>
        <a href="/"><img src="/assets/images/arrow.svg"/></a>
        <section>
          <img src={`https://image.tmdb.org/t/p/w1400_and_h450_face${ details.backdrop_path }`} alt={`${ details.title } backdrop poster`} />
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ details.poster_path }`} alt={`${details.title} poster`} />
          <h1>{details.title}</h1>
          <span>{details.release_date}</span>
          <span>{details.vote_average}% User Score</span>
          <span>{details.runtime}</span>
          <span></span>
          <h2>Overview</h2>
          <p>{details.overview}</p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getDetailsLoading(state),
  error: getDetailsError(state),
  details: getDetailsSuccess(state)
})

const mapDispatchToProps = ( dispatch ) => ( {
  getDetails: (id) => dispatch(getDetailsAction(id))
} );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);