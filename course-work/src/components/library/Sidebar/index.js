import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addBookedPlaces } from '../../../actions';





const Sidebar = ({ hall, booked_places, total_price, addBookedPlaces }) => {


  const bookTickets = (places) => e => {
    let lItem = JSON.parse(localStorage.getItem('BOOKED_PLACES'));
    lItem ? localStorage.setItem('BOOKED_PLACES', JSON.stringify(lItem.concat(places))) : localStorage.setItem('BOOKED_PLACES', JSON.stringify(places));
    places.length > 0 ? window.location.reload() : alert('You have not book any place.')
  }


  return (
    <>
      <aside className='sidebar col-md-5 col-sm-12' >
        <h2>Hall ID: {hall}</h2>
        <div className={'total-price'} >Total price: <b>{total_price}</b></div>
        <button className='booking-btn' onClick={bookTickets(booked_places)} >Booking places</button>
        <div className='sidebar-booking-list' >
        {
          booked_places.map(place => {

            return (
              <div key={place.row + '.' + place.place} className='sidebar-place' >
                <h3>
                  Place: {place.place}
                </h3>
                <div className='sidebar-place--info' >
                  <p>
                    <b>Row</b>: {place.row}
                  </p>
                  <p>
                    <b>Hall</b>: {place.hall}
                  </p>
                </div>
                <p>
                  <b>Tarif</b>: {place.category} 
                </p>
                <p>
                  <b>Price</b>: {place.price}
                </p>
              </div>
            )
          })
        }
        </div>
      </aside>
    </>
  )
}

const mapStateToProps = (state) => ({
  data: state.data,
  loaded: state.data_loaded,
  errors: state.data_errors,
  booked_places: state.booked_places,
  total_price: state.total_price,
})

const mapDispatchToProps = (dispatch) => ({
  addBookedPlaces: (data) => {
    dispatch(addBookedPlaces(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
