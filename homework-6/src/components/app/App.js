import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItem from '../item';


import './App.css';


const App = ({ add, check, deleter, todo }) => {

  console.log(todo)

  const [inpVal, setInpVal] = useState('');

  const inputHandler = e => {
    setInpVal(e.target.value)
  }

  return (
    <div className="">
      <input type="text" value={inpVal} onChange={inputHandler} />
      <button onClick={add(inpVal)} >Add</button>
      
      <ol>
        {
          todo.map( item => <ListItem item={item} doneHandler={check} deleteHandler={deleter} /> )
        }
      </ol>
      
    </div>
  );
}



export default App;
