import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getHalls } from '../../actions';

const MainPage = ({ data, loaded, errors, getHalls }) => {

    useEffect(() => {
        getHalls();
    }, [])


    return (

        <>
            <h1>Choose a Cinema Hall</h1>
            <ul className='halls-list row' >

                {
                    data.map(item => {

                        return (
                            <li className='halls-list--item col-md-6 col-sm-12' >
                                <h3>Cinema Hall ID: {item._id}</h3>
                                <Link to={{
                                    pathname: '/film/' + item._id,
                                    state: { data: item }
                                }} >To book a place</Link>
                            </li>
                        )
                    })
                }

            </ul>



        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.data,
    loaded: state.data_loaded,
    errors: state.data_errors
})

const mapDispatchToProps = (dispatch) => ({
    getHalls: () => {
        dispatch(getHalls);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);