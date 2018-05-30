import React, { Component } from 'react';
import { Link } from 'react-router';
import FacebookLogin from 'react-facebook-login';

class UserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      location: '',
      moto: '',
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      userimage: ''
    }
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleMotoChange=this.handleMotoChange.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handleClearForm=this.handleClearForm.bind(this);
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

  responseFacebook = response => {
    console.log(response)
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      username: this.state.username,
      location: this.state.location,
      moto: this.state.moto,
      userimage: this.state.picture
    }
    this.props.addUserInfo(formPayload)
    this.handleClearForm(event)
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      username: '',
      location: '',
      moto: ''
    })
  }

  componentClicked= () => console.log("clicked")

  render(){
    let fbContent;

    if(this.state.isLoggedIn) {
      fbContent = (
        <img src={this.state.userimage} alt={this.state.name}/>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="1265185803624896"
          autoLoad={true}
          fields="name,email,picture"
          onFbClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }
    return(
      <div>
        <div>
    
        </div>
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
      </div>
    )
  }
}

export default UserFormContainer;
