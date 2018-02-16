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
      <div id='username'><Link className="fa fa-motorcycle" id={icon_color} to={`/users/${props.id}`}/>{props.username}</div>
    </div>
  )
}

export default UserTile;
