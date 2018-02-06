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
        <i className="fa fa-map fa-2x"/>
        <Link className="fa fa-comments fa-2x" to={`/posts`} />
        <i className="fa fa-sliders fa-2x"/>
      </div>
      <div className="home-container">
        {homeImages}
      </div>
    </div>
  )
}


export default HomeIndexContainer;
