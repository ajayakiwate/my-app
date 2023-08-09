import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:8080/api/employee/test/list', {name:''})
      .then(response => {
        setPosts(response.data.payload);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div className="App">
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.id}, {post.name}, {post.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
