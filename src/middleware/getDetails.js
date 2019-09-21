import { loadDetails,detailsLoaded,detailsLoadingError } from '../actions';

function getDetails (id) {
  return (dispatch) => {
    dispatch( loadDetails() );
    const requestURL = `https://api.themoviedb.org/3/movie/${id}?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US`
    fetch( requestURL )
      .then( (res) => res.json() )
      .then( (res) => {
        if ( res.error ) {
          throw ( res.error );
        }
        dispatch( detailsLoaded( res ) );
        return res;
      } )
      .catch( (error) => {
        dispatch( detailsLoadingError( error ) );
      } )
  }
}

export default getDetails;