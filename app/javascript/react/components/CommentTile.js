import React from 'react';

const CommentTile = props => {
  let postcn;
  let icon_color;
  if (props.id % 2 === 0) {
    postcn = "comment-lite-container"
    icon_color = "dark-icon"
  } else {
    postcn = "comment-dark-container"
    icon_color = "lite-icon"
  }

  return(
    <div className="comment-fields-container">
      <div className={postcn}>
        {props.body}
        <a className="button" href={`/posts/${props.postId}/comments/${props.id}/edit`}>Edit</a>
      </div>
    </div>
  )
}

export default CommentTile;
