import React from 'react'
import { Provider } from 'react-redux';

import Application from '../containers/ConnectedList';
import DoneList from './done';
import UnDoneList from './undone';

import store from '../redux/store';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const App = () => {
    return(
        <Provider store={store}>
            <div className="container" >
                <BrowserRouter>
                    <Link to='/' >Home </Link>
                    <Link to='/done'>Done </Link>
                    <Link to='/undone'>Undone </Link>
                    <Switch>
                        <Route exact path='/'  component={Application} />
                        <Route path='/done' component={DoneList} />
                        <Route path='/undone' component={UnDoneList} />
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    )

}


export default App; 