import { hot } from "react-hot-loader";
import React from "react";
import Profile from "./components/profile.js";
import SideLinks from "./components/sidelinks.js";

class Navbar extends React.Component {
  render() {
    return (
      // Using React.Fragment
      <>
        <Profile />
        {this.props.sideBarList.map((menu, index) => (
          <SideLinks
            menuName={menu.name}
            iconAddress={menu.icon}
            key={menu.name + index}
          />
        ))}
      </>
    );
  }
}
Navbar.defaultProps = {
  sideBarList: [
    { name: "test", icon: "test-icon" },
    { name: "test1", icon: "test1-icon" },
    { name: "test2", icon: "test2-icon" },
  ],
};

export default hot(module)(Navbar);
