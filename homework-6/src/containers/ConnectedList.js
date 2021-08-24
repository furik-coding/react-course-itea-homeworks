import App from '../components/app/App';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { ADD_TO_DO, CHECK_TO_DO, DELETE_TO_DO } from '../constants';

const mapStateToProps = ( state ) => ({
    todo: state.todo
});

const mapDispatchToProps = ( dispatch ) => ({
    add: ( data ) => e => {
        console.log(1)
        dispatch({ type: ADD_TO_DO, payload: {
            id: uniqid(),
            text: data,
            done: false
        } });
    },
    check: (item) => e => {
        dispatch({ type: CHECK_TO_DO, payload: item });
    },
    deleter: (item) => e => {
        dispatch({ type: DELETE_TO_DO, payload: item });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);