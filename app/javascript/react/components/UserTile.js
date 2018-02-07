import React from 'react';
import { Link } from 'react-router';

const UserTile = props => {
  let usercn;
  let icon_color;
  if (props.id % 2 === 0) {
    usercn = "tile-lite-container"
    icon_color = "dark-icon"
  } else {
    usercn = "tile-dark-container"
    icon_color = "lite-icon"
  }

  return(
    <div className={usercn}>
      <i className="fa fa-motorcycle" id={icon_color}/>
      <Link to={`/users/${props.id}`} className="username">{props.username}</Link>
    </div>
  )
}

export default UserTile;
