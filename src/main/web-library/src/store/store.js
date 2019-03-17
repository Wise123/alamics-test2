import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import createRootReducer from '../reducers'
import thunk from 'redux-thunk';

const initialState = {};

export const history = createBrowserHistory();

const middleware = [
    thunk
];

const enhancers = [];

const devToolsExtension = window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
}


const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers,
);

export default store
