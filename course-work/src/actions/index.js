import axios from '../helpers/axios.public';

import { 
    DATA_REQ, DATA_RES, DATA_ERR, DATA_SINGLE_RES,
    BOOKING_PLACES,
    UPDATE_PRICE
} from '../constants';

export const getHalls = ( dispatch ) => {
    dispatch({ type: DATA_REQ });
    axios.get()
        .then( res => {
            // console.log( res );
            dispatch({ type: DATA_RES, payload: res.data });
        })
        .catch( err => {
            dispatch({ type: DATA_ERR, error: err });
        })
}

export const getSingleHall = ( id ) => ( dispatch ) => {
    dispatch({ type: DATA_REQ });
    axios.get()
        .then( res => {
            // console.log( res );
            res.data.map( item => {
                if( item._id === id ) {
                    dispatch({ type: DATA_SINGLE_RES, payload: item });
                }
            })
        })
        .catch( err => {
            dispatch({ type: DATA_ERR, error: err });
        })
}

export const addBookedPlaces = (data) => ( dispatch, getState ) => {
    
    dispatch({ type: BOOKING_PLACES, payload: data });
}

export const updatePrice = (price) => ( dispatch, getState ) => {
    
    dispatch({ type: UPDATE_PRICE, payload: price });
}


