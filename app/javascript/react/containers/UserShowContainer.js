import React from 'react';
import UserDetailComponent from '../components/UserDetailComponent';

class UserShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      location: '',
      moto: ''
    }
  }

  componentDidMount() {
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        username: json.user.username,
        location: json.user.location,
        moto: json.user.moto
      })
    })
  }

  render() {


    return(
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
    )
  }
}

export default UserShowContainer;
