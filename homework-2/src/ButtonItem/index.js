import React from 'react';

const ButtonItem = ({handler}) => {

    return (
        <button onClick={handler} className={'btn green p-10 m-10 d-block' } >Interviewed</button>
    )
}

export default ButtonItem;