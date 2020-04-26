import React from "react";
import { connect } from "react-redux";

class Project extends React.Component {
  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInUp">
        <div className="row">
          <div className="col-lg-12">
            <div className="ibox">
              <div className="ibox-title">
                <h5>All projects assigned to this account</h5>
                <div className="ibox-tools">
                  <a href className="btn btn-primary btn-xs">
                    Create new project
                  </a>
                </div>
              </div>
              <div className="ibox-content">
                <div className="row m-b-sm m-t-sm">
                  <div className="col-md-1">
                    <button
                      type="button"
                      id="loading-example-btn"
                      className="btn btn-white btn-sm"
                    >
                      <i className="fa fa-refresh" /> Refresh
                    </button>
                  </div>
                  <div className="col-md-11">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search"
                        className="form-control-sm form-control"
                      />{" "}
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          {" "}
                          Go!
                        </button>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="project-list">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Contract with Zender Company
                          </a>
                          <br />
                          <small>Created 14.08.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 48%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "48%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a1.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a2.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a4.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a5.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            There are many variations of passages
                          </a>
                          <br />
                          <small>Created 11.08.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 28%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "28%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a7.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a6.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-default">Unactive</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Many desktop publishing packages and web
                          </a>
                          <br />
                          <small>Created 10.08.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 8%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "8%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a5.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Letraset sheets containing
                          </a>
                          <br />
                          <small>Created 22.07.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 83%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "83%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a2.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a1.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a7.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Contrary to popular belief
                          </a>
                          <br />
                          <small>Created 14.07.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 97%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "97%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a4.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Contract with Zender Company
                          </a>
                          <br />
                          <small>Created 14.08.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 48%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "48%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a1.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a2.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a4.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a5.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            There are many variations of passages
                          </a>
                          <br />
                          <small>Created 11.08.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 28%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "28%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a7.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a6.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-default">Unactive</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Many desktop publishing packages and web
                          </a>
                          <br />
                          <small>Created 10.08.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 8%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "8%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a5.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Letraset sheets containing
                          </a>
                          <br />
                          <small>Created 22.07.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 83%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "83%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a2.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a1.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            Contrary to popular belief
                          </a>
                          <br />
                          <small>Created 14.07.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 97%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "97%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a4.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="project-status">
                          <span className="label label-primary">Active</span>
                        </td>
                        <td className="project-title">
                          <a href="project_detail.html">
                            There are many variations of passages
                          </a>
                          <br />
                          <small>Created 11.08.2014</small>
                        </td>
                        <td className="project-completion">
                          <small>Completion with: 28%</small>
                          <div className="progress progress-mini">
                            <div
                              style={{ width: "28%" }}
                              className="progress-bar"
                            />
                          </div>
                        </td>
                        <td className="project-people">
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a7.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a6.jpg"
                            />
                          </a>
                          <a href>
                            <img
                              alt="image"
                              className="rounded-circle"
                              src="img/a3.jpg"
                            />
                          </a>
                        </td>
                        <td className="project-actions">
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-folder" /> View{" "}
                          </a>
                          <a href="#" className="btn btn-white btn-sm">
                            <i className="fa fa-pencil" /> Edit{" "}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
