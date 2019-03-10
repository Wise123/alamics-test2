import {combineReducers} from 'redux';
import bookReducer from './bookReducer'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
    router: connectRouter(history),
    book: bookReducer
});
