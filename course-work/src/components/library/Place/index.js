import React from 'react';
import { connect } from 'react-redux';

import { addBookedPlaces, updatePrice } from '../../../actions';




const Place = ({ num, row, hall, category, price, addBookedPlaces, bookedState, updatePrice }) => {

  const placeHandler = (e) => {
    if (bookedState !== 'booked') {
      if (bookedState === 'free' && !e.target.classList.contains('booking')) {
        e.target.classList.add('booking');
        e.target.classList.remove('free');
        console.log(e.target);
        const placeData = {
          place: num,
          row: row,
          hall: hall,
          category: category,
          price: price,
          bookedState: 'booked'
        }
        addBookedPlaces(placeData);
        updatePrice(price);
      }

    }
  }


  return (
    <>
      <div className={'place col-1'} onClick={placeHandler} >
        <span className={bookedState} >{num}</span>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  data: state.data,
  loaded: state.data_loaded,
  errors: state.data_errors,
  booked_places: state.booked_places
})

const mapDispatchToProps = (dispatch) => ({

  addBookedPlaces: (data) => {
    dispatch(addBookedPlaces(data));
  },
  updatePrice: (price) => {
    dispatch(updatePrice(price))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Place);
