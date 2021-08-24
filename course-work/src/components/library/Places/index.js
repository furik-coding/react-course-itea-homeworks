import React from 'react';




const Places = ({ children }) => {

  return(
    <>
      <main className='content col-md-7 ' >
        <div className='places' >
          { children ? children.map( child =>  child ) : null }
        </div>
      </main>
    </>
  )
}

export default Places;
