import * as types from "../constants";
import {bookApi} from '../api'
import {checkStatus} from "./checkStatus";

export function getBooks() {
    return function (dispatch) {
        dispatch({
            type: types.GET_BOOKS_REQUEST,
        });
        return bookApi.getBooks(null).then(checkStatus)
            .then(
                (response) => {
                    dispatch({type: types.GET_BOOKS_SUCCESS, books: response.data})
                }
            )
            .catch(
                error => {
                    dispatch({type: types.GET_BOOKS_FAILURE})
                }
            );
    };
}