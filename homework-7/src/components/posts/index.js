import React, { Component } from 'react'

import { connect } from 'react-redux';

import { getPosts } from '../../actions';
import { Link, BrowserRouter, Route } from 'react-router-dom';


class Posts extends Component {

    state = {
        postNums: 50
    }

    componentDidMount = () => {
        const { getPosts } = this.props;
        getPosts();
    }

    

    showMorePosts = () => {

        this.setState({
            postNums: this.state.postNums + 25
        })
    }


    render = () => {

        const { data, loaded, errors, match } = this.props;
        const { showMorePosts } = this;
        const { postNums } = this.state;

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
                                        if (post.id <= postNums) {
                                            return (
                                                <li key={post.id}>{post.title} <Link to={'/posts/' + post.id} >Open post</Link> </li>
                                            )
                                        }

                                    })
                                }
                            </ul>
                        )
                }
                {data.length > postNums ? <button onClick={showMorePosts} >Show more</button> : null}

                
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
    getPosts: () => {
        dispatch(getPosts);
    }
    
})



export default connect(mapStateToProps, mapDispatchToProps)(Posts);