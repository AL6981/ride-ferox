import React from 'react';
import FeroxTile from '../components/FeroxTile'

const FeroxContainer = props => {
  return(
    <div className='tile-wrapper'>
      <FeroxTile
        header={props.header}
        altText={props.altText}
        image={props.image}
      />
    </div>
  )
}

export default FeroxContainer;
