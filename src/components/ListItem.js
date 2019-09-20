import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ id, title, release_date, vote_average, poster_path }) => (
  <li className="movie-list-item">
    <a className="movie-list-item-link" href={`/movie/${id}`}>
      <img className="movie-list-item__poster" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ poster_path }`} alt={title} />
      <span className="movie-list-item__title">{title}</span>
      <span className="movie-list-item__date">{release_date}</span>
      <span className="movie-list-item__score">{vote_average}%</span>
    </a>
  </li>
)

ListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired
  })
}

export default ListItem