import React from 'react';




const Row = ({ children }) => {

  return(
    <>
      <div className='row justify-content-center' >
        { children ? children.map( child =>  child ) : null }
      </div>
    </>
  )
}

export default Row;
