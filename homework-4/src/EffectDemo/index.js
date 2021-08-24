import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const useDataFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {

        const dataFetch = async () => {
            const res = await fetch(url);
            const fetchedData = await res.json();
            // const [ item ] = data.results;

            setData(fetchedData);
            console.log('setted', fetchedData);
        }
        dataFetch();
    }, [url]);
    return data;
}

const PostItem = ({ name, text, borderColor }) => {

    return (
        <div className={'post-item border-' + borderColor} >
            <h3></h3>
            {text}
        </div>
    )
}

const CommentItem = ({ name, email, body, borderColor }) => {

    return (
        <div className={'post-item border-' + borderColor} >
            <h3>{name}</h3>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    )
}


const PostsBlock = () => {
    const postsList = useDataFetch('https://jsonplaceholder.typicode.com/posts');


    return (

        <div>
            <h2>Posts</h2>
            {postsList.map(item => <PostItem key={item.id} text={item.title} borderColor='red' />)}
        </div>
    )
}

const CommentsBlock = () => {
    const postsList = useDataFetch('https://jsonplaceholder.typicode.com/comments');

    return (

        <div>
            <h2>Comments</h2>
            {postsList.map(item => <CommentItem key={item.id} name={item.name} email={item.email} body={item.body} borderColor='blue' />)}
        </div>
    )
}

const AlbumsBlock = () => {
    const postsList = useDataFetch('https://jsonplaceholder.typicode.com/albums');

    return (

        <div>
            <h2>Albums</h2>
            {postsList.map(item => <PostItem key={item.id} text={item.title} borderColor='yellow' />)}
        </div>
    )
}




const EffectDemo = () => {

    return (
        <Router>
            <h3>Effect </h3>
            <ul>
                <li>
                    <Link to='posts' >Posts</Link>
                </li>
                <li>
                    <Link to='comments' >Comments</Link>
                </li>
                <li>
                    <Link to='albums' >Albums</Link>
                </li>
            </ul>
            <div className='flex-wrap'>
                <Route path="/posts" >
                    <PostsBlock />
                </Route>
                <Route path="/comments" >
                    <CommentsBlock />
                </Route>
                <Route path="/albums" >
                    <AlbumsBlock />
                </Route>
            </div>
        </Router>

    )
}

export default EffectDemo;