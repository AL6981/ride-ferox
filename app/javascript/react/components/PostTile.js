import React from 'react';
import { Link } from 'react-router';

const PostTile = props => {
  let postcn;
  if (props.id % 2 === 0) {
    postcn = "tile-lite-container"
  } else {
    postcn = "tile-dark-container"
  }

  return(
    <div className={postcn}>
      <Link to={`/posts/${props.id}`} className="post-title">{props.title}</Link>
    </div>
  )
}

export default PostTile;
