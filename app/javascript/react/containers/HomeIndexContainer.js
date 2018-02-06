import React from 'react';
import { Link } from 'react-router';
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
    <div>
      <div className="link-tabs">
        <h6 className="mapping-tab-link">Map</h6>
        <Link to={`/posts`} className="far fa-map fa-2x">Forum</Link>
      </div>
      <div className="home-container">
        {homeImages}
      </div>
    </div>
  )
}


export default HomeIndexContainer;
