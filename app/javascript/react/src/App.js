import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ReviewsContainer from '../containers/PostsIndexContainer'
import ReviewsContainer from '../containers/PostShowContainer'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route>
        <IndexRoute component={PostsIndexContainer}/>
        <Route path='/posts/:id' component={PostShowContainer}/>
      </Route>
    </Router>
  )
}

export default App;
