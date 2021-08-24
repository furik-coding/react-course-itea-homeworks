
const promise = ({ dispatch, getState} ) => ( next ) => ( action ) => {

    if( action.type === "PROMISE"){
        //...
        console.log('[PROMISE]', action );
        const [ startAction, successAction, errorAction ] = action.actions;

        dispatch({ type: startAction });
        return action.promise
            .then( res => res.json() )
            .then( res => {
                dispatch({ type: successAction, payload: res });
            })
            .catch( err => {
                dispatch({ type: errorAction, error: err });
            })

    } else {
        return next( action );
    }


}

export default promise;