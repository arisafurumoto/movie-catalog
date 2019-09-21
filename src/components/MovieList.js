import React from 'react'
import ListItem from './ListItem'

const MovieList = ( { movies } ) => (
  <ul>
    {movies.map( ( item, index ) =>
      <ListItem key={index} {...item} />
    )}
  </ul>
)

export default MovieList