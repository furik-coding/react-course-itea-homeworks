import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import PostSinglePage from '../PostSinglePage';

const PostList = ({ match }) => {

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

  const [listLength, setListLength] = useState(20)
  const contentItems = useDataFetch('https://jsonplaceholder.typicode.com/posts');
  const list = match.params.nums ? contentItems.map(item => item.id <= match.params.nums ? <li><Link to={'/posts/' + item.id} >Item {item.id}</Link></li> : null) : contentItems.map(item => item.id <= listLength ? <li><Link to={'/posts/' + item.id} >Item {item.id}</Link></li> : null);
  const numBtnHandler = () => {
    setListLength(listLength + 20);
  }

  console.log(contentItems)

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {
          list
        }
      </ul>
      {
        match.params.nums ? null : <button onClick={numBtnHandler}>Show more</button>
      }
    </div>
  )
}

export default PostList;
