import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { connect } from 'react-redux';

import { getDetailsSuccess, getDetailsLoading, getDetailsError } from '../reducers';
import LoadingSpinner from './LoadingSpinner';
import getDetailsAction from '../middleware/getDetails';
import './MovieDetails.scss';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    const { getDetails } = this.props;
    getDetails(window.location.pathname.split("/").slice(-1)[0]);
  }

  render () {
    const { loading, error, details} = this.props;
    if ( loading ) return <LoadingSpinner />

    if ( details.release_date ) {
      details.release_date = details.release_date.slice( 0, 4 );
      details.vote_average = details.vote_average * 10;
      details.runtime = Math.floor(details.runtime / 60) + 'h ' + details.runtime % 60 + 'min';
    }

    return (
      <div>
        <Helmet>
          <title>{`${ details.title } | The Movie Database (TMDb)`}</title>
          <meta name="description" content={details.overview} />
        </Helmet>
        <section className="details">
          <a href="/" className="back-link" aria-label="Go back to home"><img src="/assets/images/arrow.svg"/></a>
          <div className="hero">
            <img className="hero__image" src={`https://image.tmdb.org/t/p/w1400_and_h450_face${ details.backdrop_path }`} alt={`${ details.title } backdrop poster`} />
          </div>
          <div className="frame small">
            <div className="details-top">
              <div className="details__poster-wrap">
                <img className="details__poster" srcSet={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ details.poster_path } 1x, https://image.tmdb.org/t/p/w370_and_h556_bestv2${ details.poster_path } 2x`} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ details.poster_path }`} alt={`${details.title} poster`} />
              </div>
              <div className="details-content">
                <h1 className="details__title">{details.title}</h1>
                <span className="details__date">{details.release_date}</span>
                <span className="details__score">{details.vote_average}% User Score</span>
                <span className="details__runtime">{details.runtime}</span>
              </div>
            </div>
            <div className="details-bottom">
              <h2>Overview</h2>
              <p>{details.overview}</p>
            </div>
          </div>
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