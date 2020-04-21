import React from "react";

class SideLinks extends React.Component {
  render() {
    return (
      // this.props.menuName this.props.iconAddress passed
      <li>
        <a href="index.html" id="navbar_primary" aria-expanded="true">
          <i className="fa fa-th-large" />{" "}
          <span className="nav-label" id="dashboards">
            {this.props.menuName}
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
    );
  }
}
export default SideLinks;
