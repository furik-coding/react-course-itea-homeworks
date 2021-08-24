import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomInputType extends Component {

    state = {
        inputVal: this.props.value
    }


    render = () => {
        const { type, placeholder, value, handler, name, contentMaxLength } = this.props;

        let contentLength = value.length;

        return (
            <label>
                <div>{name}</div>

                <input
                    type={ type }
                    placeholder={ placeholder }
                    value={ value }
                    onChange={handler(contentMaxLength)}
                />
                { contentLength >= contentMaxLength && <span>Max length is {contentMaxLength} </span> }
            </label>
        )
    }
}

CustomInputType.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'number']).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handler: PropTypes.func.isRequired,
    contentLength: PropTypes.bool,
    contentMaxLength: PropTypes.number
}

export default CustomInputType;
