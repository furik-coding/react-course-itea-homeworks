import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getHalls, getSingleHall } from '../../actions';

import Sidebar from '../library/Sidebar/';
import Places from '../library/Places';
import Row from '../library/Row';
import Place from '../library/Place';
import { Link } from 'react-router-dom';


const CinemaHall = ({ match, data, data_single, data_loaded, data_errors, booked_places, getSingleHall, getHalls }) => {

  // const bookingHandler = (e) => {
  //   const [bookedPlaces, setBookedPlaces] = useState([]);
  // }

  useEffect(() => {
    getSingleHall(match.params.id);
    // getHalls()
  }, [])

  let localeItem = JSON.parse(localStorage.getItem('BOOKED_PLACES'));

  return (
    <div className='cinema-wrap' >
      <div className='row align-items-center' >
        <div className='back-to-main' >
          <Link to='/' >Go to Main Page</Link>
        </div>
        <Sidebar hall={match.params.id} />
        <Places>

          {
            data_single.rows ?
              data_single.rows.map((row, rowIndex) => {
                let price;
                if (row.category === 'standart') {
                  price = 500;
                } else if (row.category === 'economs') {
                  price = 300;
                } else {
                  price = 800;
                }

                return (
                  <Row key={rowIndex}  >
                    {row.places.map((place, placeIndex) => {
                      let fItem;
                      localeItem && localeItem.length > 0 ? localeItem.map(dataItem => {
                        if (dataItem.place === (placeIndex + 1) && dataItem.row === (rowIndex + 1) && dataItem.hall === (match.params.id)) {
                          // console.log('[BOOKED_STATE]', dataItem.bookedState)
                          fItem = dataItem.bookedState;
                          // console.log('[fItem]', fItem)
                        }
                      }) : fItem = null;
                      return (
                        <Place
                          key={placeIndex}
                          num={placeIndex + 1}
                          row={rowIndex + 1}
                          hall={match.params.id}
                          category={row.category}
                          price={price}
                          bookedState={
                            fItem ? fItem : place.bookedState
                          }
                        />
                      )

                    })}
                  </Row>
                )
              }) :
              null
          }

        </Places>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  data: state.data,
  data_single: state.data_single,
  loaded: state.data_loaded,
  errors: state.data_errors,
  booked_places: state.booked_places
})

const mapDispatchToProps = (dispatch) => ({
  getHalls: () => {
    dispatch(getHalls);
  },
  getSingleHall: (id) => {
    dispatch(getSingleHall(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CinemaHall);
