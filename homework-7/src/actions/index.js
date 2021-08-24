

import {
    POSTS_REQ, POSTS_RES, POSTS_ERR,
    COMMENTS_REQ, COMMENTS_RES, COMMENTS_ERR,
    PROMISE
} from '../constants';

export const getPosts = ( dispatch, getState ) => {

    // console.log( dispatch)

    dispatch({
        type: PROMISE,
        actions: [
            POSTS_REQ,
            POSTS_RES,
            POSTS_ERR
        ],
        promise: fetch('https://jsonplaceholder.typicode.com/posts')
    });

};

export const getUsPosts = (userid) => ( dispatch, getState ) => {


    dispatch({
        type: PROMISE,
        actions: [
            POSTS_REQ,
            POSTS_RES,
            POSTS_ERR
        ],
        promise: fetch('http://jsonplaceholder.typicode.com/posts?userId=' + userid)
    });

};


export const getSinglePost = (id) => ( dispatch, getState ) =>  {

    dispatch({
        type: PROMISE,
        actions: [
            POSTS_REQ,
            POSTS_RES,
            POSTS_ERR
        ],
        promise: fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    });

    dispatch({
        type: PROMISE,
        actions: [
            COMMENTS_REQ,
            COMMENTS_RES,
            COMMENTS_ERR
        ],
        promise: fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
    });

};

export const getPostComments = (id) => ( dispatch, getState ) =>  {

    dispatch({
        type: PROMISE,
        actions: [
            COMMENTS_REQ,
            COMMENTS_RES,
            COMMENTS_ERR
        ],
        promise: fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
    });

};

