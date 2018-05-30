import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
    }
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


  render(){
    let fbContent;

    if(window.user) {
      fbContent = (
          <img src={window.user.userimage} alt={window.user.username}/>
      )
    } else {
      fbContent = (
        <a href="/users/auth/facebook">Sign in with Facebook</a>
      )
    }

    return(
      <div>
        {fbContent}
      </div>
    )
  }
}

export default Facebook;
