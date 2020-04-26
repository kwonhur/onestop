import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <li className="nav-header">
        <div className="dropdown profile-element">
          <img
            alt="image"
            className="rounded-circle"
            src={this.props.profilePicAddress}
          />
          <a data-toggle="dropdown" className="dropdown-toggle" href="#">
            <span className="block m-t-xs font-bold" id="profile">
              {this.props.profileFirstName} {this.props.profileLastName}
            </span>
            <span className="text-muted text-xs block">
              Art Director <b className="caret"></b>
            </span>
          </a>
          <ul className="dropdown-menu animated fadeInRight m-t-xs">
            <li>
              <a className="dropdown-item" href="profile.html">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="contacts.html">
                Contacts
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="mailbox.html">
                Mailbox
              </a>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="logo-element">IN+</div>
      </li>
    );
  }
}

export default Profile;
