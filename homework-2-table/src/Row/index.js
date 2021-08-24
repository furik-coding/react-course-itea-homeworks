import React from 'react';

const Row = ({ children, head }) => {

    console.log(children)

    const chldr = children;
    let updChldr = chldr.map( ( child, index ) => {
        let item = React.cloneElement(child, { key: index, head: head })

        return item
    })

    if(head) {
        return (
            <tr>
                {updChldr}
            </tr>
        )
    } else {
        return (
            <tr>
                { children }
            </tr>
        )
    }
}

export default Row;