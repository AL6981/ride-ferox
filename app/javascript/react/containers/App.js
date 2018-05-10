import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HomeIndexContainer from './HomeIndexContainer';
import PostIndexContainer from './PostIndexContainer';
import PostShowContainer from './PostShowContainer';
import PostsFormContainer from './PostsFormContainer';
import UserIndexContainer from './UserIndexContainer';
import UserShowContainer from './UserShowContainer';
import UserEditFormContainer from './UserEditFormContainer';
import MapContainer from './MapContainer';
import NavBar from '../components/NavBar';

const App = props => {
  return (
      <Router history={browserHistory}>
        <Route path='/' component={NavBar}>
          <IndexRoute component={() => (<HomeIndexContainer homeImages={props.homeImages} />)}/>
          <Route path='/posts' component={PostIndexContainer}/>
          <Route path='/posts/:id' component={PostShowContainer} />
          <Route path='/users' component={UserIndexContainer}/>
          <Route path='/users/:id' component={UserShowContainer} />
          <Route path='/users/:id/edit' component={UserEditFormContainer} />
          <Route path='/maps' component={MapContainer} />
        </Route>
      </Router>
  )
}

export default App;
