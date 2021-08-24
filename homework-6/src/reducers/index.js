import {
    ADD_TO_DO, CHECK_TO_DO, DELETE_TO_DO
} from '../constants';

const initailState = {
    todo: [],
    done: []
}

const reducer = ( state = initailState, action ) => {
    switch( action.type ){
        case ADD_TO_DO:
            return({
                ...state,
                todo: [...state.todo, action.payload]
            })

        case CHECK_TO_DO:
            let adterCheck = state.todo.map( item =>  {
                let doneState = action.payload.id === item.id ? !item.done : item.done;
                item.done = doneState;
                return item;
            })
            return({
                ...state,
                todo: adterCheck
            })
        case DELETE_TO_DO:
            let afterDel = state.todo.filter( item => item.id !== action.payload.id);
            console.log(afterDel)
            return({
                ...state,
                todo: afterDel
            })
        
        default:
            return state;

    }
}

export default reducer;




// action.payload.text === item.text ? item.done = !item.done : item.done = item.done