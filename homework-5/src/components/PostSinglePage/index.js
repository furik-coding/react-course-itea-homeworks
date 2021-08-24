import React, { useState, useEffect } from 'react';

const PostSinglePage = ({match}) => {

  const useDataFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {

      const dataFetch = async () => {
        const res = await fetch(url);
        const fetchedData = await res.json();
        // const [ item ] = data.results;

        setData(fetchedData);
        // console.log('setted', fetchedData);
      }
      dataFetch();
    }, [url]);
    return data;
  }


  const postItem = useDataFetch('https://jsonplaceholder.typicode.com/posts/' + match.params.postid);
  const fetchedComments = useDataFetch('https://jsonplaceholder.typicode.com/posts/' + match.params.postid + '/comments');
  const [postComments, setPostComments] = useState([]);
  const showCommentsBtnHandler = () => {
    setPostComments(fetchedComments);
  }
  const hideCommentsBtnHandler = () => {
    setPostComments([]);
  }

  console.log('[Post]' , postItem);
  console.log('[Comments]', postComments);

  return (
    <div className='post-item border-red'>
        <h1>
          {postItem.title}
        </h1>
        <p  >
          {postItem.body}
        </p>
  <button onClick={postComments.length > 0 ? hideCommentsBtnHandler : showCommentsBtnHandler}>{postComments.length > 0 ? 'Hide Comments' : 'Show comments' }</button>
        {
          postComments.map(comment => <li className='post-item border-blue' >
            <h4>{comment.name}</h4>
            <span>{comment.email}</span>
            <p>{comment.body}</p>
          </li>)
        }
    </div>
  )
}

export default PostSinglePage;