import React, { Component } from 'react';
import { ThemeContext } from '../ContextDemo/context.helper';



class ImageInput extends Component {

    state = {
        src: ''
    }

    showFile = e => {
        let input = e.target;

        let file = input.files[0];

        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            //   console.log(reader.result);

            this.setState({
                src: reader.result
            })
        };


    };


    render = () => {
        const { showFile } = this;
        const { handler } = this.props;
        const { src } = this.state;

        return (
            <ThemeContext.Consumer>
                {
                    theme => {
                        return (
                            <label className='file-reader' className={ 'bg-' + theme }>
                                {src && <img src={src} className='file-preview' onLoad={handler(src)} />}

                                <input type='file' onChange={showFile} className={ 'bg-' + theme } />
                            </label>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ImageInput;