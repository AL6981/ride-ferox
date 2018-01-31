import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import FeroxContainer from './src/containers/FeroxContainer'
import PostsIndexContainer from './src/containers/PostsIndexContainer';
import PostShowContainer from './src/containers/PostShowContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={FeroxContainer}/>
      <Route path='/posts' component={PostsIndexContainer}/>
      <Route path='/post/:id' component={PostShowContainer}/>
    </Router>
  )
}

export default App;
