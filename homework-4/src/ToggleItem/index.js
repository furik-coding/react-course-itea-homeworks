import React, { Component } from 'react';

const ToggleItem = ({ value, action, activeState, children }) => {


    return (
        <button className={activeState && 'active'} onClick={action(value)} >{value}</button>
    );
}

export default ToggleItem;
