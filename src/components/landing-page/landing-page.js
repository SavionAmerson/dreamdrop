import React from "react";

class Landing extends React.Component {
    render() {
      return (
        <div className="landing-page">
          <div className="landing-text">
              <h1>Welcome to Dream Drop!</h1>
              <h3>Your public online dream journal</h3>
              <br />
              <div className="landing-buttons">
              <a href="/home" className="btn btn-outline-light btn-lg col-md-4 col-6">Continue as Guest</a>
              <br />
              <a href="#" className="btn btn-outline-light btn-lg col-md-4 col-6">Login</a>
              <br />
              <a href="#" className="btn btn-outline-light btn-lg col-md-4 col-6">I'm new here</a>
              </div>
          </div>
        </div>
      );
    }
  }

export default Landing;