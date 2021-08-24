import React, { Component } from 'react';
import './App.css';
import Toggler from './Toggler';
import ToggleItem from './ToggleItem';
import CustomInputType from './CustomInputType';
import ImageInput from './ImageInput';

class App extends Component {

  state = {
    param: 'blue',
    inputVal: '',
    inputFile: ''
  }

  toggleHandler = (value) => (e) => {
    this.setState({
      param: value
    })
  }

  inputHandler = (lngth) => e => {
    if (e.target.value.toString().length <= lngth) {
      this.setState({
        inputVal: e.target.value
      })
    }


  }

  fileChanger = (src) => e => {
    console.log(src)
    this.setState({
      inputFile: src
    })
  }
   
  formHandler = () => {
    console.log(this.state)
  }


  render = () => {
    const { toggleHandler, inputHandler, fileChanger, formHandler } = this;
    const { param, inputVal, inputFile } = this.state;


    return (
      <>

        {/* Classwork task 1 */}
        <Toggler action={toggleHandler} activeState={param} name='color' >
          <ToggleItem value='blue' />
          <ToggleItem value='red' />
          <ToggleItem value='yellow' />
        </Toggler>

        {/* Classwork task 2 */}
        <CustomInputType type='text' name='Custom Input' placeholder='Write any' value={inputVal} handler={inputHandler} contentMaxLength={5} />

        {/* Homework */}
        <ImageInput src={inputFile} handler={fileChanger} />

        <button onClick={formHandler} >Отправить</button>

      </>
    );
  }
}




export default App;
