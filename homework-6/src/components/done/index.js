import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItem from '../item';
import uniqid from 'uniqid';

import { ADD_TO_DO, CHECK_TO_DO, DELETE_TO_DO } from '../../constants';

const DoneList = ({ todo, check, deleter }) => {

    const list = todo.map( item => item.done ? <ListItem item={item} doneHandler={check} deleteHandler={deleter} /> : null );
    console.log(list)
    return (
        
        <>
            <h1>Done</h1>
            {list}
        </>
    )
}


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

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);