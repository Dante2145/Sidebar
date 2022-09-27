import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return ( 
        <div style={{ height: "75vh" }} className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
              EASE YOUR <span className="text-warning">RENTAL </span> SEARCH
              </h1>
              <p className="lead my-4">
                  Renting in Singapore can be a long process but we aim to 
                  make it easy and transparent for you. Other than helping 
                  you to find your ideal home, we provide end-to-end services to manage it. 
              </p>
              <br />
              <div className="search">
                <i className="fa fa-search"></i>
                <input id = "SearchInput" type="text" class="form-control" placeholder="Search for a MRT, project, area"/>
                <button id = "SearchButton" class="btn btn-primary">Search</button> {/*<!--Consider Getting rid of button and having on enter-->*/}
              </div>
              <img 
              styles={{ height: 50 }}
      src={require('../../images/Traveller.svg')} alt='logo' />
            </div>
          </div>
        </div>
         

    );
  }
}

export default Home;