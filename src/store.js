import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import addConcert,{sendImgToDatabase} from './state/addConcert'
import auth from './state/auth'
import {initAuthUserSync} from "./state/auth";
import concerts,{getConcertsFromDb} from './state/concerts'
import 'bootstrap/dist/css/bootstrap.min.css';

const reducer = combineReducers({
    addConcert,
    auth,
    concerts
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk))
);

store.dispatch(initAuthUserSync());
store.dispatch(getConcertsFromDb());
