import React, { Component } from 'react';
import Cell from '../Cell';
import Row from '../Row';
import Table from '../Table';
import CustomInputType from '../CustomInputType';
import ImageInput from '../ImageInput';
import ToggleItem from '../ToggleItem';
import Toggler from '../Toggler';
import { ThemeContext } from './context.helper';

class ContextDemo extends Component {

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

    


    render () {

        
        const { toggleHandler, inputHandler, fileChanger, formHandler } = this;
        const { param, inputVal, inputFile } = this.state;

        return (
                <ThemeContext.Provider value={param} >
                    <Table>
                        <Row>
                            <Cell />
                            <Cell />
                            <Cell />
                        </Row>
                        <Row>
                            <Cell />
                            <Cell />
                            <Cell />
                        </Row>
                    </Table>

                    <CustomInputType type='text' name='Custom Input' placeholder='Write any' value={inputVal} handler={inputHandler} contentMaxLength={5} />

                    <ImageInput />

                    <Toggler action={toggleHandler} activeState={param} name='color' >
                        <ToggleItem value='blue' />
                        <ToggleItem value='red' />
                        <ToggleItem value='yellow' />
                    </Toggler>
                </ThemeContext.Provider>
        )
    }
}

export default ContextDemo;
