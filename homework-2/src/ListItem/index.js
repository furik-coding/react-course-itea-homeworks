import React from 'react';
import ButtonItem from '../ButtonItem';
import LoaderImg from '../LoaderImg';
import imgure from '../img.jpg';


const ListItem = ({user, interviewed, handler}) => {

    return (
        <li className='user' >
            <h3 className='user-name' >{user.name}</h3>
            <LoaderImg src={imgure} />
            <div className={interviewed ? 'user-info green-border' : 'user-info red-border' } >
                <p>{user.address}</p>
                <p>{user.company}</p>
                <p>{user.email}</p>
                <p>{user.message}</p>
                <p>{user.phone}</p>
                <span className='interviewed-placeholder green-text' >{interviewed ? 'Interviewed' : '' }</span>
            </div>
            <ButtonItem handler={handler(user.index)} />
        </li>
    )
}

ListItem.defaultProps = {
    user: {
        name: 'John Doe',
        adress: 'Lenina str. 1',
        company: 'Ukrnafta',
        email: 'john@doe.nick',
        message: 'Hello, world!',
        phone: '+38 (050) 444 - 33 - 22'
    },
    interviewed: false,
    handler: () => console.log('test')
}

export default ListItem;