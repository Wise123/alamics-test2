import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from "./container/App.js";
import { ConnectedRouter } from 'connected-react-router';
import store, {history} from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"));