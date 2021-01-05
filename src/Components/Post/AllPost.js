import React, { useEffect, useState } from 'react';
import Post from './Post';

const AllPost = () => {

    const [posts, SetPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(posts => SetPosts(posts));
      }, []);

    return (
        <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
};

export default AllPost;