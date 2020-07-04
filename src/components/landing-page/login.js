import React from "react";

class Login extends React.Component {
    render() {
      return (
        <div className="register-page">
            <div className="register">
                <div className="register-box">
                    <h1>Name</h1>
                    <input type="text"></input>
                    <br />
                    <h1>Password</h1>
                    <input type="text"></input>
                    <br />
                    <a href="/home"><button className="register-button btn-outline-light btn-lg col-md-4 col-6">Login</button></a>
                </div>
            </div>
        </div>
      );
    }
  }

export default Login;