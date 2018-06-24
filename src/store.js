import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer=combineReducers({



});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(

    state => state
    // reducer,
    // composeEnhancers(
    //     applyMiddleware(thunk))
);
