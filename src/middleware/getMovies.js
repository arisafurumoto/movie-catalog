import { loadMovies,moviesLoaded,moviesLoadingError, searched } from '../actions';

function getMovies (keyword) {
  return (dispatch) => {
    dispatch( loadMovies() );
    var requestURL = '';
    if ( keyword ) {
      requestURL = `https://api.themoviedb.org/3/search/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&sort_by=popularity.desc&language=en-US&query=${ keyword }`;
    } else {
      requestURL = `https://api.themoviedb.org/3/discover/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&sort_by=popularity.desc&language=en-US`;
    }
    fetch( requestURL )
      .then( (res) => res.json() )
      .then( ( res ) => {
        setTimeout( function () {
          if ( res.error ) {
            throw ( res.error );
          }
          dispatch( moviesLoaded( res.results ) );
          dispatch( searched(keyword) );
          return res.results;
        }, 300 );
      } )
      .catch( (error) => {
        dispatch( moviesLoadingError( error ) );
      } )
  }
}

export default getMovies;