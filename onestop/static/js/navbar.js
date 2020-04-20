import { hot } from "react-hot-loader";
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      // Using React.Fragment
      <>
        <li className="nav-header">
          <div className="dropdown profile-element">
            <img
              alt="image"
              className="rounded-circle"
              src="img/profile_small.jpg"
            />
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <span className="block m-t-xs font-bold" id="profile">
                David Williams
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
        <li>
          <a href="index.html" id="navbar_primary" aria-expanded="true">
            <i className="fa fa-th-large" />{" "}
            <span className="nav-label" id="dashboards">
              Dashboards
            </span>{" "}
            <span className="fa arrow" />
          </a>
          <ul className="nav nav-second-level collapse">
            <li>
              <a href="index.html">Dashboard v.1</a>
            </li>
            <li>
              <a href="dashboard_2.html" className="active">
                Dashboard v.2
              </a>
            </li>
            <li>
              <a href="dashboard_3.html">Dashboard v.3</a>
            </li>
            <li>
              <a href="dashboard_4_1.html">Dashboard v.4</a>
            </li>
            <li>
              <a href="dashboard_5.html">Dashboard v.5 </a>
            </li>
          </ul>
        </li>
      </>
    );
  }
}

export default hot(module)(Navbar);
