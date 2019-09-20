import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getMoviesSuccess, getMoviesLoading, getMoviesError, changeKeyword } from '../reducers';
import LoadingSpinner from './LoadingSpinner';
import MovieList from './MovieList';
import getMoviesAction from '../middleware/getMovies';
import { keywordChanged } from '../actions'

class MovieView extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind( this );
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount () {
    const { getMovies, keyword } = this.props;
    getMovies(keyword);
  }

  shouldComponentRender() {
    const {loading} = this.props;
    if(this.loading === false) return false;
    return true;
  }

  handleSubmit ( event ) {
    event.preventDefault();
    const { getMovies, keyword } = this.props;
    getMovies(keyword);
  }

  render () {
    const { loading, error, movies, keyword, onSearch, onChangeKeyword} = this.props;
    if ( !this.shouldComponentRender() ) return <LoadingSpinner />
    
    return (
      <section>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <label className="search-label" htmlFor="search">
              <span>Search</span>
            </label>
            <input id="search" type="text" name="search" value={keyword} onChange={onChangeKeyword}/>
            <input className="button" type="submit" value="Search" onClick={onSearch} />
          </form>
        </div>
        <div className="movies">
          {error && <span className='movies-error'>{error}</span>}
          <MovieList movies={movies} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getMoviesLoading(state),
  error: getMoviesError(state),
  movies: getMoviesSuccess(state),
  keyword: changeKeyword(state)
})

const mapDispatchToProps = ( dispatch ) => ( {
  getMovies: (keyword) => dispatch(getMoviesAction(keyword)),
  onChangeKeyword: (e) => dispatch(keywordChanged(e.target.value))
} );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieView);