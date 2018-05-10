import React, { Component } from 'react';
import { Link } from 'react-router';
import UserDetailComponent from '../components/UserDetailComponent';
import UserEditFormContainer from './UserEditFormContainer';

class UserShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      location: '',
      moto: '',
      currentUserId: ''
    }
  }

  componentDidMount() {
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        username: json.user.username,
        location: json.user.location,
        moto: json.user.moto,
        currentUserId: json.current_user
      })
    })
  }

  render() {
    let editLink;
    let userId = this.props.params.id
    if (parseInt(userId) === this.state.currentUserId) {
      editLink = <Link to={`/users/${userId}/edit`}><button className="button">Edit</button></Link>
    }

    return(
      <div>
        <div className="user-show-container">
          <div className="user-show-tile">
            <UserDetailComponent
            key={this.state.id}
            username={this.state.username}
            location={this.state.location}
            moto={this.state.moto}
            />
          </div>
          {editLink}
        </div>
    </div>
    )
  }
}

export default UserShowContainer;
