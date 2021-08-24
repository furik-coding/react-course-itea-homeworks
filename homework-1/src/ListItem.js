import React, {Component} from 'react';

const ListItem = ({ user, changer }) => {
		
    const { arrived, guest } = user;

    return (
        <div>
            <h3>{guest.name}</h3>
            <p>Company: {guest.company}</p>
            <p>Phone: {guest.phone}</p>
            <span>{user.arrived ? "Arrived" : "Not Arrived"}</span>
            <button onClick={changer( guest.index )} >Arrived</button>
        </div>
    )

}

ListItem.defaultProps = {
    user: {
        guest: {
            name: 'Test',
            company: 'Testing',
            phone: '+38 (000) 000-0000'
        },
        arrived: false
    },
    changer: () => console.log(1)
};

export default ListItem;