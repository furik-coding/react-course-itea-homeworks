import React from 'react';

const Cell = ({ children, type, cells, background, color, currency, head }) => {

    let curVal;

    if( type === 'money' && currency ) {
        curVal = currency;
    } else if( type === 'money' || currency ) {
        curVal = ''; 
        console.error( 'Type or currensy is not defined' );
    } else {
        curVal = '';
    }

    if(head) {
        return (
            <th style={{backgroundColor: background, color: color}} colSpan={ cells } className={type ? 'type-' + type : 'type-text' } >
                { children + '' + curVal }
            </th>
        )
    } else {
        return (
            <td style={{backgroundColor: background, color: color}} colSpan={ cells } className={type ? 'type-' + type : 'type-text' } >
                { children + '' + curVal }
            </td>
        )
    }
}

Cell.defaultProps = {
    type: 'text',
    cells: 1,
    background: 'transparent',
    color: 'black'
  }

export default Cell;