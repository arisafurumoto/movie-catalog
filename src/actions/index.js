import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  CHANGE_KEYWORD,
} from '../constants/actionTypes';

export function loadMovies() {
  return {
    type: LOAD_MOVIES,
    loading: true,
  };
}

export function moviesLoaded(movies) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    loading: false,
    movies,
  };
}

export function moviesLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    loading: false,
    error,
  };
}

export function keywordChanged ( keyword ) {
  return {
    type: CHANGE_KEYWORD,
    loading: false,
    keyword,
  };
}