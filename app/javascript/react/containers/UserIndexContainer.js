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
    .then(response => { return response.json()})
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
        <div className="user-container">
          <div className="users-title">FeRox Community Members</div>
            <div className="user-tile-container">
              <h5>Member List</h5>
              <h6>Click on a bike to see information about that user.</h6>
                {users}
            </div>
            <h5>Chat with another Roxxer</h5>
        </div>
      </div>
    )
  }
}

export default UserIndexContainer;
