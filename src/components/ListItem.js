import React, { Component } from 'react'

export default class ListItem extends Component {
  render () {
    const { id, title, poster_path, release_date, vote_average } = this.props;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let release = release_date;
    release = months[parseInt(release.slice(5, 7)) - 1] + ' ' + release.slice(0, 4);
    let score = vote_average;
    score = score * 10;

    return (
      <li className="movie-list-item">
        <a className="movie-list-item-link" href={`/movie/${id}`}>
          <img className="movie-list-item__poster" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ poster_path }`} alt={title} />
          <span className="movie-list-item__title">{title}</span>
          <span className="movie-list-item__date">{release}</span>
          <span className="movie-list-item__score">{score}%</span>
        </a>
      </li>
    );
  }
}