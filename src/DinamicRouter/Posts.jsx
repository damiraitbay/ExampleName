// Posts.js
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
function Posts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
  }, []);

  return (
    <div className="container posts-container">
      <div className="posts-header">
        <Link to="/" className="btn btn-secondary back-button">
          <span>←</span> Артқа
        </Link>
        <h2>Барлық посттар</h2>
      </div>

      {loading ? (
        <div className="loading">Жүктелуде...</div>
      ) : (
        <div className="posts-grid">
          {data.map(post => (
            <div className="post-card" key={post.id}>
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-body">{post.body.substring(0, 100)}...</p>
                <Link to={`/posts/${post.id}`} className="post-link">
                  Толығырақ оқу <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts