import React from "react";

class Register extends React.Component {
    render() {
      return (
        <div className="register-page">
            <div className="register">
                <div className="register-box">
                    <h1>Choose a name</h1>
                    <input type="text"></input>
                    <br />
                    <h1>Choose a password</h1>
                    <input type="text"></input>
                    <br />
                    <h1>Confirm password</h1>
                    <input type="text"></input>
                    <a href="/home"><button className="register-button btn-outline-light btn-lg col-md-4 col-6">Start Dreaming</button></a>
                </div>
            </div>
        </div>
      );
    }
  }

export default Register;