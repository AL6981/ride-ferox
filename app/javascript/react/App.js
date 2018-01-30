import React from 'react';
import PostsIndexContainer from './src/containers/PostsIndexContainer';
import PostShowContainer from './src/containers/PostShowContainer';

const App = props => {
  return(
    <div className='post-index'>
    <h3> Posts </h3>
      <PostsIndexContainer />
    </div>
  )
}

export default App;
