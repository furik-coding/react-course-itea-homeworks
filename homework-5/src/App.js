import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import root_routes from './react_routes';

const App = () => {

  

  return (
    <Router>
      <ul>
        <li>
          <Link to='/' >Main</Link>
        </li>
        <li>
          <Link to='/posts/limit/12' >Limit of Posts</Link>
        </li>
        <li>
          <Link to='/posts/1' >Single Post</Link>
        </li>
      </ul>
      <div className="container" >
      <Switch>
            {
              root_routes.map( route => {
                if( route.type === "public"){
                  return(
                    <Route key={route.path} {...route} />
                  )
                }

              })
            }
          </Switch>
      </div>
    </Router>
  )
}

export default App;
