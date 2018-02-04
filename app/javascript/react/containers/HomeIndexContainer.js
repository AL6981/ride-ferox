import React from 'react';
import HomeTile from '../components/HomeTile'

const HomeIndexContainer = props => {
  let homeImages = props.homeImages.map(homeImage => {
    return(
      <HomeTile
        key={homeImage.id}
        id={homeImage.id}
        imageLink={homeImage.image}
      />
    )
  })

  return(
    <div className="home-container">
      {homeImages}
    </div>
  )
}


export default HomeIndexContainer;
