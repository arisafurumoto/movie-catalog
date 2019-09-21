import React from 'react';

const Title = ( { searched } ) => {
  if ( searched ) {
    return ( <h2>Search results for "{searched}"</h2>)
  } else {
    return(<h2>Popular Movies</h2>)
  }
};
  
export default Title;