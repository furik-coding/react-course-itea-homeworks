import React, { Component } from 'react'

import { connect } from 'react-redux';

import { getUsPosts } from '../../actions';
import { Link, BrowserRouter, Route } from 'react-router-dom';


class UserPosts extends Component {



    componentDidMount = () => {

        let usId = this.props.match.params.userid;
        console.log('[UserId]', usId);
        getUsPosts(this.props.match.params.userid);

    }





    render = () => {

        const { data, loaded, errors, match } = this.props;
        const { showMorePosts } = this;

        return (
            <>
                <h1> Posts </h1>

                {
                    !loaded ?
                        (<> Loading ... </>) :
                        (
                            <ul>
                                {
                                    data.map(post => {
                                        return (
                                            <li key={post.id}>{post.title} <Link to={'/posts/' + post.id} >Open post</Link> </li>
                                        )

                                    })
                                }
                            </ul>
                        )
                }


            </>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.posts,
    loaded: state.posts_loaded,
    errors: state.posts_errors
})

const mapDispatchToProps = (dispatch) => ({
    getUsPosts: (userid) => {
        dispatch(getUsPosts(userid))
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);