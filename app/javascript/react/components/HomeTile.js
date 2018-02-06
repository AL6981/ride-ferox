import React from 'react';

const HomeTile = props => {
  return(
    <div className="home-tile portrait">
      <img src={props.imageLink} alt="" />
    </div>
  )
}

export default HomeTile;
