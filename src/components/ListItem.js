import React, { Component } from 'react'
import Poster from './Poster';

export default class ListItem extends Component {
  render () {
    const { id, title, poster_path, release_date, vote_average } = this.props;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let release = release_date;
    release = months[parseInt(release.slice(5, 7)) - 1] + ' ' + release.slice(0, 4);
    let score = vote_average;
    score = score * 10;
    let scoreRank = 'high';
    if ( score < 70 && score >= 50 ) scoreRank = 'medium';
    if ( score < 50 ) scoreRank = 'low';

    return (
      <li className="movies-list-item">
        <a className="movies-list-item-link" href={`/movie/${ id }`}>
          <div className="movies-list-item__poster-wrap">
            <Poster path={poster_path} title={title}/>
          </div>
          <span className="movies-list-item__title">{title}</span>
          <span className="movies-list-item__date">{release}</span>
          <span className={`movies-list-item__score ${scoreRank}`}>{score}%</span>
        </a>
      </li>
    );
  }
}