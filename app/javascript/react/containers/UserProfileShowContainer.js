import React, { Component } from 'react';
import { Link } from 'react-router';
import UserDetailComponent from '../components/UserDetailComponent';
import UserFormContainer from './UserFormContainer';

class UserProfileShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      location: '',
      moto: '',
      currentUserId: ''
    }
    this.addUserInfo=this.addUserInfo.bind(this);
  }

  componentDidMount() {
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`)
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

  addUserInfo(formPayload){
    debugger
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`,
      {
        credentials: 'same-origin',
        headers: {
         'Content-Type': 'application/json',
         'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        username: json.user.username,
        location: json.use.location,
        moto: json.user.moto
      })
    })
  }

  render() {
    return(
      <UserFormContainer
        key={this.state.id}
        addUserInfo={this.addUserInfo}
        username={this.state.username}
        location={this.state.location}
        moto={this.state.moto}
      />
    )
    let editLink;
    let userId = this.props.params.id
    if (userId === this.state.currentUserId) {
      editLink = <Link to={`/users/${props.id}/edit`}><button>Edit</button></Link>
      }
    return(
      <div>
      <div className="link-tabs">
        <Link className="fa fa-map fa-3x" to={`/maps`}/>
        <Link className="fa fa-comments fa-3x" to={`/posts`} />
        <Link className="fa fa-users fa-3x" to={`/users`} />
      </div>
      <div className="user-show-container">
        <div className="user-show-tile">
          <UserDetailComponent
          key={this.state.id}
          username={this.state.username}
          location={this.state.location}
          moto={this.state.moto}
          />
        </div>
      </div>
      {editLink}
      <div>

      </div>
    </div>
    )
  }
}

export default UserProfileShowContainer;
