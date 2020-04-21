import React from "react";

class MainTitle extends React.Component {
  render() {
    return (
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-sm-4">
          <h2>This is main title</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">This is</a>
            </li>
            <li className="breadcrumb-item active">
              <strong>Breadcrumb</strong>
            </li>
          </ol>
        </div>
        <div className="col-sm-8">
          <div className="title-action">
            <a href="" className="btn btn-primary">
              This is action area
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default MainTitle;
