import { combineReducers } from 'redux';

import { 
    DATA_REQ, DATA_RES, DATA_ERR, DATA_SINGLE_RES,
    BOOKING_PLACES,
    UPDATE_PRICE
} from '../constants';

const initailState = {

    data: [],
    data_loaded: false,
    data_errors: [],
    data_single: [],

    booked_places: [],

    total_price: 0

}

const rootReducer = ( state = initailState, action ) => {
    switch( action.type ){

        case DATA_REQ:
            return({
                ...state,
                data_loaded: false
            });
        
        case DATA_RES:
            return({
                ...state,
                data_loaded: true,
                data: action.payload
            });

        case DATA_SINGLE_RES:
            return({
                ...state,
                data_loaded: true,
                data_single: action.payload
            });

        case DATA_ERR: 
            return({
                ...state,
                data_errors: [...state.data_errors, action.error]
            });

        case BOOKING_PLACES:
            
            return({
                ...state,
                booked_places: [...state.booked_places, action.payload]
            })

        case UPDATE_PRICE:
            return({
                ...state,
                total_price:  state.total_price + action.payload
            })


        default:
            return state;

    }
}


export default rootReducer;

