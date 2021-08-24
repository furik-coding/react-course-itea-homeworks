import React from 'react';

const Table = ({ children }) => {

    return (
        <table border="1">
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Table;