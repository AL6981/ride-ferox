import React from 'react';
import { Link } from 'react-router'
import BackButton from '../components/BackButton'

const NavBar = props => {
  return(
    <div>
      <div className="nav-container">
        <Link to='/' className="nav-name">FeRox ~ Ride Outside the Lines</Link>
        <Link to='/' className="fa fa-check-circle fa-2x">Logged In</Link>
        <Link to='/' className="fa fa-lock fa-2x">Log In</Link>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
export default NavBar;

// <nav class="nav-container">

//   <div class="nav-links">
//     <% if current_user %>
//       <div class="nav-button"><%= link_to 'Logged In', ' ', class: "fa fa-check-circle fa-3x" %></div>
//       <% if current_user.admin? %>
//         <div class="nav-button"><%= link_to 'Admin', admin_root_path, class: "fa fa-lock fa-3x" %></div>
//       <% end %>
//     <% else %>
//       <div class="nav-button"><%= link_to 'Log In', user_facebook_omniauth_authorize_path, class: "fa fa-user-plus fa-3x" %></div>
//     <% end %>
//   </div>
// </nav>
