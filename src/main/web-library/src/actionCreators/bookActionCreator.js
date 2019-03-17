import * as types from '../constants';
import {bookApi} from '../api';
import {checkStatus} from './checkStatus';

export function getBooks() {
  return function(dispatch) {
    dispatch({
      type: types.GET_BOOKS_REQUEST,
    });
    return bookApi.getBooks(null).then(checkStatus).then(
        (response) => {
          dispatch({type: types.GET_BOOKS_SUCCESS, books: response.data});
        },
    ).catch(
        (error) => {
          dispatch({type: types.GET_BOOKS_FAILURE, error});
        },
    );
  };
}

export function createBooks(books) {
  return function(dispatch) {
    dispatch({
      type: types.CREATE_BOOKS_REQUEST,
    });
    return bookApi.updateBooks(books).then(checkStatus).then(
        (response) => {
          dispatch({type: types.CREATE_BOOKS_SUCCESS, books: response.data});
        },
    ).catch(
        (error) => {
          dispatch({type: types.CREATE_BOOKS_FAILURE, error});
        },
    );
  };
}

export function updateBooks(books) {
  return function(dispatch) {
    dispatch({
      type: types.UPDATE_BOOKS_REQUEST,
    });
    return bookApi.updateBooks(books).then(checkStatus).then(
        (response) => {
          dispatch({type: types.UPDATE_BOOKS_SUCCESS, books: response.data});
        },
    ).catch(
        (error) => {
          dispatch({type: types.UPDATE_BOOKS_FAILURE, error});
        },
    );
  };
}

export function deleteBooks(books) {
  return function(dispatch) {
    dispatch({
      type: types.DELETE_BOOKS_REQUEST,
    });
    return bookApi.deleteBooks(books).then(checkStatus).then(
        (response) => {
          dispatch({type: types.DELETE_BOOKS_SUCCESS, books: response.data});
        },
    ).catch(
        (error) => {
          dispatch({type: types.DELETE_BOOKS_FAILURE, error});
        },
    );
  };
}
