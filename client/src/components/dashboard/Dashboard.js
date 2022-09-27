import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Sidebar from "../sidebar/sidebar";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";


const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (prop.layout === "/dashboard") {
      return (
        <Route
          path={prop.layout + prop.path}
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
              <Sidebar />
              <div className="content">
                <Switch>{getRoutes(routes)}</Switch>
              </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card-stats card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5"> 
                        <div className="icon-big text-center icon-warning">
                          <i className="icon-big text-center icon-warning"></i>
                        </div>
                      </div>
                      <div className="col-7">
                        <p>Hello</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
              <p>This is a space for the tiles to come in</p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
