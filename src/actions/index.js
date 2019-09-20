export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST'
const getMoviesRequest = () => {
  return {
    type: GET_MOVIES_REQUEST
  }
}

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
const getMoviesSuccess = (json) => {  
  return {
    type: GET_MOVIES_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}

export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE'
const getMoviesFailure = (error) => {
  type: GET_MOVIES_FAILURE,
  error
}