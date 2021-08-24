import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CinemaHall from './pages/CinemaHall';

import { Provider } from 'react-redux';

import store from '../redux/store';

const App = () => {

  return(

    <Provider store={store} >
      <BrowserRouter>

        <div className='container' >
              
              <Route exact path='/' component={MainPage} />
              <Route path='/film/:id' component={CinemaHall} />
            
        </div>

      </BrowserRouter>
    </Provider>
  )
}

export default App;
