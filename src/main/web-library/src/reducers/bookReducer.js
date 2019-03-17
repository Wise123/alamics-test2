import * as types from "../constants/index"

const initialState = {books: [], editedBooks: []};

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_BOOKS_REQUEST: {
            return state
        }
        case types.GET_BOOKS_SUCCESS: {
            return {
                ...state,
                books: action.books
            };
        }
        case types.GET_BOOKS_FAILURE: {
            return state;
        }

        case types.UPDATE_BOOKS_REQUEST: {
            return state
        }
        case types.UPDATE_BOOKS_SUCCESS: {
            const newBooks = state.books.map(
                (book) => {
                    const editedBook = action.books.find((book) => {
                        return book.id === action.book.id;
                    });
                    if (editedBook){
                        return editedBook;
                    }
                    else {
                        return book;
                    }

                });

            return {
                ...state,
                books: newBooks
            };
        }
        case types.UPDATE_BOOKS_FAILURE: {
            return state;
        }

        case types.DELETE_BOOKS_REQUEST: {
            return state
        }
        case types.DELETE_BOOKS_SUCCESS: {
            const newBooks = state.books.filter((book) => {
                const deletedBookIndex =  action.books.findIndex((deletedBook) => {
                    return deletedBook.id === book.id;
                });
                return deletedBookIndex === -1;
            });
            return {
                ...state,
                books: newBooks
            };
        }
        case types.DELETE_BOOKS_FAILURE: {
            return state;
        }

        case types.CREATE_BOOKS_REQUEST: {
            return state
        }
        case types.CREATE_BOOKS_SUCCESS: {
            return {
                ...state,
                books: state.books.concat(action.books)
            };
        }
        case types.CREATE_BOOKS_FAILURE: {
            return state;
        }

        default: {
            return state;
        }
    }
}