import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getMoviesSuccess, getMoviesLoading, getMoviesError, changeKeyword, useSearch } from '../reducers';
import MovieList from './MovieList';
import Title from './Title';
import getMoviesAction from '../middleware/getMovies';
import { keywordChanged } from '../actions'
import "./MovieView.scss"
import "./Search.scss"

class MovieView extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount () {
    const { getMovies, keyword } = this.props;
    getMovies(keyword);
  }

  handleSubmit ( event ) {
    event.preventDefault();
    const { getMovies, keyword } = this.props;
    getMovies(keyword);
  }

  render () {
    const { loading, error, movies, keyword, searched, onSearch, onChangeKeyword} = this.props;
    return (
      <section className="home-content">
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <label className="search-label visually-hidden" htmlFor="search">
              <span>Search</span>
            </label>
            <input id="search" type="text" name="search" placeholder="Search" value={keyword} onChange={onChangeKeyword}/>
            <input className="button" type="submit" value="Search" onClick={onSearch} />
          </form>
        </div>
        <div className="movies">
          <Title searched={searched}/>
          {error && <span className='movies-error'>{error}</span>}
          <MovieList movies={movies} loading={loading} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getMoviesLoading(state),
  error: getMoviesError(state),
  movies: getMoviesSuccess(state),
  keyword: changeKeyword( state ),
  searched: useSearch(state),
})

const mapDispatchToProps = ( dispatch ) => ( {
  getMovies: (keyword) => dispatch(getMoviesAction(keyword)),
  onChangeKeyword: (e) => dispatch(keywordChanged(e.target.value))
} );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieView);