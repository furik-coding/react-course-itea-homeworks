import {
    POSTS_REQ, POSTS_RES, POSTS_ERR, 
    COMMENTS_REQ, COMMENTS_RES, COMMENTS_ERR
} from '../constants';

const initailState = {

    posts: [],
    comments: [],
    posts_loaded: false,
    posts_errors: []
}

const postsReducer = ( state = initailState, action ) => {
    switch( action.type ){

        case POSTS_REQ:
            return({
                ...state,
                posts_loaded: false
            });
        
        case POSTS_RES:
            return({
                ...state,
                posts_loaded: true,
                posts: action.payload
            });

        case POSTS_ERR: 
            return({
                ...state,
                posts_errors: [...state.posts_errors, action.error ]
            });

        case COMMENTS_REQ:
            return({
                ...state,
                posts_loaded: false
            });
        
        case COMMENTS_RES:
            return({
                ...state,
                posts_loaded: true,
                comments: action.payload
            });

        case COMMENTS_ERR: 
            return({
                ...state,
                posts_errors: [...state.posts_errors, action.error ]
            });

        default:
            return state;

    }
}

export default postsReducer;