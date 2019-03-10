import * as types from "../constants/index"

const initialState = {books: []};

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_BOOKS_REQUEST: {
            return state
        }
        case types.GET_BOOKS_SUCCESS: {
               console.log(action)
            return {...state, books: action.books};
        }
        case types.GET_BOOKS_FAILURE: {
            return state;
        }
        default: {
            return state;
        }
    }
}