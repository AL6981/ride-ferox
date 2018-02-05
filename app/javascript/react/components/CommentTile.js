import React from 'react';

const CommentTile = props => {
  return(
    <div>
      <div className="comment-body">
        {props.body}
      </div>
      <div>
        <a className="button" id="comment-edit" href={`/posts/${props.postId}/comments/${props.id}/edit`}>Edit</a>
      </div>
    </div>
  )
}

export default CommentTile;
