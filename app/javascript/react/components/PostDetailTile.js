import React from 'react';

const PostDetailTile = (props) => {
  return(
    <div className="show-container">
      <div className="detail-container">
        <div className="post-pic">
          <img src='' id='show-pic'/>
        </div>
        <div className="p-title">
          {props.title}
        </div>
        <div className="p-content">
          {props.content}
        </div>
        </div>
    </div>
  )
}

export default PostDetailTile;
