import { hot } from "react-hot-loader";
import React from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions/index";
import Profile from "./components/profile.js";
import SideLinks from "./components/sidelinks.js";

class Navbar extends React.Component {
  componentDidMount() {
    this.props.fetchData("current-user");
  }
  render() {
    return (
      // Using React.Fragment
      <>
        <Profile {...this.props} />
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
    { name: "Home", icon: "test-icon" },
    { name: "My Tasks", icon: "test1-icon" },
    { name: "My Teams", icon: "test2-icon" },
    { name: "My Projects", icon: "test3-icon" },
  ],
};
const mapStateToProps = (state) => ({
  profilePicAddress: state.profilePicAddress,
  profileEMail: state.eMail,
  profileFirstName: state.firstName,
  profileLastName: state.lastName,
  profileLoading: state.profileLoading,
  profileLoadingError: state.profileLoadingError,
});
const mapDispatchToProps = {
  fetchData,
};
export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(Navbar)
);
