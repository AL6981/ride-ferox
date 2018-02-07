import React from 'react';
import { Link } from 'react-router';

const PostTile = props => {
  let postcn;
  let bike_color;
  if (props.id % 2 === 0) {
    postcn = "tile-lite-container"
    bike_color = "dark-bike"
  } else {
    postcn = "tile-dark-container"
    bike_color = "lite-bike"
  }

  return(
    <div className={postcn}>
      <i className="fa fa-motorcycle" id={bike_color}/>
      <Link to={`/posts/${props.id}`} className="post-title">{props.title}</Link>
    </div>
  )
}

export default PostTile;
