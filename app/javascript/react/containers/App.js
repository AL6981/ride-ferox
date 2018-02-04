import React from 'react'
import { Route, Router, browserHistory } from 'react-router';
import HomeIndexContainer from './HomeIndexContainer'
import PostIndexContainer from './PostIndexContainer'
import PostShowContainer from './PostShowContainer'
import PostsFormContainer from './PostsFormContainer'

const App = props => {
  return (
      <Router history={browserHistory}>
        <Route path='/' component={() => (<HomeIndexContainer homeImages={props.homeImages} />)}/>
        <Route path='/api/v1/posts' component={PostIndexContainer}/>
        <Route path='/api/v1/posts/:id' component={PostShowContainer} />
        <Route path='/api/v1/posts/new' component={PostsFormContainer} />
      </Router>
  )
}

export default App;
