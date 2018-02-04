import React from 'react'
import { Route, Router, browserHistory } from 'react-router';
import HomeIndexContainer from './HomeIndexContainer'
import PostIndexContainer from './PostIndexContainer'
import PostShowContainer from './PostShowContainer'

const App = props => {
  return (
      <Router history={browserHistory}>
        <Route path='/' component={() => (<HomeIndexContainer homeImages={props.homeImages} />)}/>
        <Route path='/posts' component={PostIndexContainer}/>
        <Route path='/posts/:id' component={PostShowContainer} />
      </Router>
  )
}

export default App;
