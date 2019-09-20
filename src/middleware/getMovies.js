import { loadMovies,moviesLoaded,moviesLoadingError } from '../actions';

function getMovies () {
  return (dispatch) => {
    dispatch( loadMovies() );
    fetch( 'https://api.themoviedb.org/3/discover/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&sort_by=popularity.desc&language=en-US' )
      .then( (res) => res.json() )
      .then( (res) => {
        if ( res.error ) {
          throw ( res.error );
        }
        dispatch( moviesLoaded( res.results ) );
        return res.products;
      } )
      .catch( (error) => {
        dispatch( moviesLoadingError( error ) );
      } )
  }
}

export default getMovies;