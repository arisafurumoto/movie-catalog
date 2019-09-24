import { loadDetails,detailsLoaded,detailsLoadingError } from '../actions';

function getDetails (id) {
  return (dispatch) => {
    dispatch( loadDetails() );
    const requestURL = `https://api.themoviedb.org/3/movie/${id}?api_key=25f59a952337b8cf24ca5e2427f109ea&language=en-US`
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