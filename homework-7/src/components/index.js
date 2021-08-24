import React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import Application from '../containers/ConnectedList';
import Posts from './posts';
import PostItem from './item';
import UserPosts from './userposts';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container" >
                    <Switch>
                        <Route exact path='/' component={Posts} />
                        <Route path='/posts/:id' component={PostItem} />
                        <Route path='/user/:userid' component={UserPosts} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    )

}


export default App; 