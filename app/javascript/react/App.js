import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import PostsIndexContainer from './src/containers/PostsIndexContainer';
import PostShowContainer from './src/containers/PostShowContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={PostsIndexContainer}/>
      <Route path='/posts' component={PostsIndexContainer}/>
      <Route path='/post/:id' component={PostShowContainer}/>
    </Router>
  )
}

export default App;
