import React from 'react';

const PostDetailTile = (props) => {
  return(
    <div>
      <div className="post-show-title">
        {props.title}
        <img src='' id='post-show-pic'/>
      </div>
      <div className="post-show-content">
        {props.content}
      </div>
    </div>
  )
}

export default PostDetailTile;
