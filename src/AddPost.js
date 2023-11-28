import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function AddPost() {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3000/posts') 
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  return (
    <div className="App">
      <h4>VALUE FETCH BY AXIOS</h4>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default AddPost;