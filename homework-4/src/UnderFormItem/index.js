import React, { useState } from 'react';
import { ThemeContext } from '../ContextDemo/context.helper';

const UnderFormItem = ({ theme, name, email, city }) => {

    return (
        <div className={ 'under-item border-' + theme }>
            <h1>Color: {theme}</h1>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default UnderFormItem;