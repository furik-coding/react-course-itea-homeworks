import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSinglePost, getPostComments } from '../../actions';

const ListItem = ({ match, data, loaded, errors, getSinglePost, comments }) => {

    useEffect(() => {

        getSinglePost(match.params.id);
    }, [])

    console.log()

    const commentsList = true;

    return (
        <>
            {
                loaded ? (
                    <>
                        <h1>{data.title}</h1>
                        <p>
                            {data.body}
                        </p>
                    </>
                ) : (<>Loading..</>)

            }
            {comments && <h2>Comments</h2>}
            <div className="comments" >
                {
                    comments.map(comment => (
                        <div className="comments-item" >
                            <h3>{comment.name}</h3>
                            <h4>{comment.email}</h4>
                            <p>{comment.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

const mapStateToProps = (state, match) => ({
    data: state.posts,
    loaded: state.posts_loaded,
    errors: state.posts_errors,
    comments: state.comments
})

const mapDispatchToProps = (dispatch, match) => {


    return ({

        getPostComments: (id) => {
            dispatch(getPostComments(id))
        },
        getSinglePost: (id) => {
            dispatch(getSinglePost(id));
        },
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(ListItem);