import React from 'react';
import { Link } from 'react-router';

const PostTile = (props) => {
  return(
    <div className="post-tile">
      <Link to={`/posts/${props.id}`}>{props.title}</Link>
      <hr/>
    </div>
  )
}

export default PostTile;
