import React from 'react'
import LoadingSpinner from './LoadingSpinner';
import ListItem from './ListItem'

const MovieList = ( { movies, loading } ) => {
  if ( loading ) {
    return(<LoadingSpinner/>)
  } else {
    return (
      <ul className="movies-list">
        {movies.map( ( item, index ) =>
          <ListItem key={index} {...item} />
        )}
      </ul>
    )
  }
}

export default MovieList