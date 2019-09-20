import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const MovieList = ( { movies } ) => (
  <ul>
    {movies.map( ( item, index ) =>
      <ListItem key={index} {...item} />
    )
    }
  </ul>
)

MovieList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape( {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired
    } ).isRequired
  ).isRequired
}

export default MovieList