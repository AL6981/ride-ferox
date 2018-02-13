import React, { Component } from 'react';
import { Link } from 'react-router';
import UserTile from '../components/UserTile';

class UserIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/users')
    .then(response =>
      response.json())
    .then(body => {
      this.setState({users: body})
    })
  }

  render() {
    let users = this.state.users.map(user => {
      return(
        <UserTile
          key={user.id}
          id={user.id}
          username={user.username}
        />
      )
    })

    return(
      <div>
        <div className="link-tabs">
          <Link className="fa fa-map fa-2x" to={`/maps`}/>
          <Link className="fa fa-comments fa-2x" to={`/posts`} />
          <i className="fa fa-sliders fa-2x"/>
        </div>
        <div className="user-container">
          <div className="users-title">FeRox Community Members</div>
            <div className="user-tile-container">
              <h5>Member List</h5>
                {users}
            </div>
            <h5>Chat with another Roxxer</h5>
        </div>
      </div>
    )
  }
}

export default UserIndexContainer;
