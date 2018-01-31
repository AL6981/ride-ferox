import React from 'react';

const FeroxTile = props => {
  return(
    <div className='ferox-photo'>
      <h5>{props.header}</h5>
      <img alt={props.altText} src={props.image}/>
    </div>
  )
}




export default FeroxTile;
