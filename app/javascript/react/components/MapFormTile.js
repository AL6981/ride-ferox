import React, { Component } from 'react';
import { Link } from 'react-router';


const MapFormTile = props => {
  return (
    <div>
    <Link to={`/users/${users.id}`}>{users.username}</Link>
      <p>{props.location}</p>
    </div>
  )
}

export default MapFormTile;
