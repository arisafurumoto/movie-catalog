import React from 'react';

const Poster = ( { path, title } ) => {
  if ( path ) {
    return ( <img className="movies-list-item__poster" srcSet={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ path } 1x, https://image.tmdb.org/t/p/w370_and_h556_bestv2${ path } 2x`} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${ path }`} alt={title} /> )
  } else { 
    return false;
  }
};
  
export default Poster;