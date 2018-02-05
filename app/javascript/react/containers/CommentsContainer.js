import React from 'react';
import CommentTile from '../components/CommentTile';

const CommentsContainer = props => {
  let comments = props.comments.map(comment => {
    return(
      <CommentTile
        key={comment.id}
        id={comment.id}
        body={comment.body}
        postId={props.postId}
      />
    )
  });

  return (
    <div>
      {comments}
    </div>
  )
}

export default CommentsContainer;
