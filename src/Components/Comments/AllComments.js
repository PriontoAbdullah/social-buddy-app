import React, { useEffect, useState } from "react";
import Comment from './Comment';

const AllComments = ({postId}) => {

const [Comments, SetComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    )
      .then(res => res.json())
      .then(comments => SetComments(comments));
  }, [postId]);

    return (
        <div>
      {Comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
    );
};

export default AllComments;