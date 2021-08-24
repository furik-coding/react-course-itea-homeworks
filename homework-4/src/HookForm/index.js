import React, { useState } from 'react';
import { ThemeContext } from '../ContextDemo/context.helper';
import Table from '../Table';
import Row from '../Row';
import Cell from '../Cell';
import CustomInputType from '../CustomInputType';
import ToggleItem from '../ToggleItem';
import Toggler from '../Toggler';
import ImageInput from '../ImageInput';
import UnderFormItem from '../UnderFormItem';

const HookForm = () => {

    const [toggleVaue, setToggleVaue] = useState('blue');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userCity, setUserCity] = useState('Kharkiv');
    const [userData, setUserData] = useState([]);
    // const [usersList, setUsersList] = useState([]);
    

    let param = (val) => setToggleVaue(val);
    let inputVal = (val) => setUserName(val);
    let setEmail = (val) => setUserEmail(val);
    let setCity = (val) => setUserCity(val);
    let setData = (val) => setUserCity(val);

    const toggleHandler = (value) => (e) => {
        param(value)
    }

    const inputHandler = (lngth) => e => {
        if (e.target.value.toString().length <= lngth) {
            inputVal(e.target.value)
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const selectHandler = (e) => {
        setCity(e.target.value);
    }


    const btnHandler = () => {
        let newItem = <UnderFormItem theme={toggleVaue} name={userName} email={userEmail} city={userCity} />;
        if(userData) {
            setUserData([ ...userData, newItem ]);
        } else {
            setUserData([ newItem ]);
        }
        console.log(userData)

    }

    
    
    let list = userData ? userData.map( item => item ) : null;
   




    return (
        <>
            <ThemeContext.Provider value={toggleVaue} >

                <CustomInputType type='text' name='Add Your User Name' placeholder='User Name' value={userName} handler={inputHandler} contentMaxLength={10} />

                <label>
                    <input type='email' onChange={emailHandler} style={{ color: toggleVaue }} />
                </label>

                <label>
                    <select onChange={selectHandler} >
                        <option>Kharkiv</option>
                        <option>Kyiv</option>
                        <option>Odesa</option>
                        <option>Lviv</option>
                    </select>
                </label>

                <Toggler action={toggleHandler} activeState={toggleVaue} name='color' >
                    <ToggleItem value='blue' />
                    <ToggleItem value='red' />
                    <ToggleItem value='yellow' />
                </Toggler>

                <button onClick={btnHandler} >Add Item</button>

                { list }
            </ThemeContext.Provider>
        </>
    )
}

export default HookForm;