import React from 'react';

const UserDetailComponent = (props) => {
  return(
      <div className="user-show-content">
        <div className="user-show-username">
          {props.username}
          <img src='' id='user-show-pic'/>
        </div>
        <div className="user-show-location">
          {props.location}
        </div>
        <div className="user-show-moto">
          {props.moto}
        </div>
      </div>
  )
}

export default UserDetailComponent;
