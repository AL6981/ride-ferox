import React from 'react';
import { Link } from 'react-router';

const PostTile = props => {
  return(
    <div className="tile-container">
      <Link to={`/posts/${props.id}`} className="post-title">{props.title}</Link>
    </div>
  )
}

export default PostTile;
