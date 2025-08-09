// PostDetail.js
import {Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function PostDetail() {
  const {id} = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
  }, [id]);

  return (
    <div className="container post-detail-container">
      <div className="post-detail">
        {loading ? (
          <div>Жүктелуде...</div>
        ) : (
          <>
            <h1 className="detail-title">{data.title}</h1>
            <p className="detail-body">{data.body}</p>
            <Link to="/posts" className="btn btn-secondary back-button">
              <span>←</span> Посттар тізімі
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default PostDetail