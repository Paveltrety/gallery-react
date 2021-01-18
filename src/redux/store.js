import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './reducers/usersReducer';
import photoReducer from './reducers/photoReducer';
import albumReducer from './reducers/albumReducer'

const reducers = combineReducers({
    usersPage: usersReducer,
    albums: albumReducer,
    photos: photoReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;