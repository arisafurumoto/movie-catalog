import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMoviesSuccess, getMoviesLoading, getMoviesError } from '../reducers';
import LoadingSpinner from './LoadingSpinner';
import MovieList from './MovieList';
import getMoviesAction from '../middleware/getMovies';

class MovieView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }
  componentDidMount () {
    const {getMovies} = this.props;
    getMovies();
  }

  shouldComponentRender() {
    const {loading} = this.props;
    if(this.loading === false) return false;
    return true;
  }

  render () {
    const { loading, error, movies } = this.props;
    if ( !this.shouldComponentRender() ) return <LoadingSpinner />
    
    return (
      <div className="movies">
        {error && <span className='movies-error'>{error}</span>}
        <MovieList movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getMoviesLoading(state),
  error: getMoviesError(state),
  movies: getMoviesSuccess(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies: getMoviesAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieView);