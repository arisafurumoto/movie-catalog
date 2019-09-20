import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  CHANGE_KEYWORD,
} from '../constants/actionTypes';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  movies: [],
  keyword: '',
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.movies,
      }
    }

    case LOAD_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
      
    case CHANGE_KEYWORD: {
      return {
        ...state,
        loading: false,
        keyword: action.keyword,
      };
    }
    default:
      return state;
  }
}

export const getMoviesSuccess = (state) => state.movies;
export const getMoviesLoading = (state) => state.loading;
export const getMoviesError = ( state ) => state.error;
export const changeKeyword = ( state ) => state.keyword;

export default appReducer