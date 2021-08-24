import { createStore, compose } from 'redux';

const composeEnhancers = process.env.NODE_ENV !==
    'production' && typeof window !==
    'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const initailState = {
    course: "",
    count: 0
}

const CHANGE_COURSE = 'CHANGE_COURSE';
const ADD_COUNT = 'ADD_COUNT';
const SUB_COUNT = 'SUB_COUNT';

const reducer = ( state = initailState, action ) => {
    switch( action.type ){
        case CHANGE_COURSE:
            return({
                ...state,
                course: action.payload
            });
        
        case ADD_COUNT:
            return({
                ...state,
                count: state.count + 1
            });

        case SUB_COUNT:
            return({
                ...state,
                count: state.count - 1
            });


        default:
            return state;

    }
}


console.log( store );

const changeCourse = {
    type: CHANGE_COURSE,
    payload: 'React and Redux',
    data: 123
};

store.dispatch( changeCourse );

const add = { type: ADD_COUNT };
const sub = { type: SUB_COUNT };

const render = () => {
    const result = document.getElementById('count');
    result.innerHTML = store.getState().count;
}

store.subscribe( render );

document.addEventListener('DOMContentLoaded', () => {
    const add_btn = document.getElementById('add');
    const sub_btn = document.getElementById('sub');

    add_btn.addEventListener('click', () => {
        store.dispatch( add );
        console.log( store.getState() );
    });
    sub_btn.addEventListener('click', () => {
        store.dispatch( sub );
        console.log( store.getState() );
    });

});
