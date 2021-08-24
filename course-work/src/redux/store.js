import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

import promise from './middlewares/promise';


// import { loadState, saveState } from '../helpres/localStorage'; 

const composeEnhancers = process.env.NODE_ENV !==
    'production' && typeof window !==
    'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middlewares = applyMiddleware( 
    thunk,
    promise
);

// const preloadData = loadState();


let store = createStore( reducers, composeEnhancers(middlewares) );


export default store;