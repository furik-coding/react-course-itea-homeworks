import React, { useState } from 'react';

const ListItem = ({ doneHandler, deleteHandler, item }) => {

    // const { text, done } = item;
    return(
        <li className={ item.done ? 'done' : '' } >
            <span>{item.text}</span>
        <button  onClick={doneHandler(item)} > { item.done ? 'NO' : 'Done'} </button>
        <button  onClick={deleteHandler(item)} > Delete </button>
        </li>
    )
}

export default ListItem;