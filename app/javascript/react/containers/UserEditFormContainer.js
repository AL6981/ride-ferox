import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class UserEditFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      location: '',
      moto: ''
    }
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleMotoChange=this.handleMotoChange.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.addUserInfo=this.addUserInfo.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    })
  }

  handleMotoChange(event) {
    this.setState({
      moto: event.target.value
    })
  }

  addUserInfo(formPayload){
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`,
      {
        credentials: 'same-origin',
        headers: {
         'Content-Type': 'application/json',
         'X-Requested-With': 'XMLHttpRequest'
      },
      method: 'PATCH',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      browserHistory.push('/')
    })
    .catch(error => console.error('FAIL-do better'))
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      username: this.state.username,
      location: this.state.location,
      moto: this.state.moto
    }
    this.addUserInfo(formPayload)
  }

  render(){
    return(
      <div className="user-form-border">
        <input
          placeholder='... update your road name'
          type='text'
          value={this.state.username}
          onChange={this.handleUsernameChange}
          className="username-form"
        />
        <input
          placeholder='... update your city, state'
          type='text'
          value={this.state.location}
          onChange={this.handleLocationChange}
          className="location-form"
        />
        <input
          placeholder='... update your moto(s)'
          type='text'
          value={this.state.moto}
          onChange={this.handleMotoChange}
          className="moto-form"
        />
        <button className="button" type="submit" value="Submit" onClick={this.handleFormSubmit}>Submit</button>
      </div>
    )
  }
}

export default UserEditFormContainer;
