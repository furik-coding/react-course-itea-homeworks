import React, { Component } from 'react';
import ToggleItem from '../ToggleItem';
import PropTypes from 'prop-types';

const Toggler = ({ children, action, activeState, name }) => {


    return (
        <div>
            {
                React.Children.map(children, (ChildItem) => {
                    if (React.isValidElement(ChildItem)) {
                        return React.cloneElement(ChildItem, {
                            action: action,
                            activeState: ChildItem.props.value === activeState,
                            name: name
                        })
                    } else {
                        console.error('Element not valid', ChildItem);
                        return null;
                    }
                })
            }
        </div>
    );
}

Toggler.propTypes = {
    children: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    activeState: PropTypes.string,
    action: PropTypes.func.isRequired,
};


export default Toggler;
