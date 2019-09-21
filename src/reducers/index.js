import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS_ERROR,
  CHANGE_KEYWORD,
  SEARCHED,
} from '../constants/actionTypes';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  movies: [],
  details: {},
  keyword: '',
  searched: '',
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
      
    case LOAD_DETAILS: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        details: action.details,
      }
    }

    case LOAD_DETAILS_ERROR: {
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
      
    case SEARCHED: {
      return {
        ...state,
        searched: action.searched,
      };
    }
      
    default:
      return state;
  }
}

export const getMoviesSuccess = (state) => state.movies;
export const getMoviesLoading = (state) => state.loading;
export const getMoviesError = ( state ) => state.error;
export const getDetailsSuccess = (state) => state.details;
export const getDetailsLoading = (state) => state.loading;
export const getDetailsError = ( state ) => state.error;
export const changeKeyword = ( state ) => state.keyword;
export const useSearch = ( state ) => state.searched;

export default appReducer