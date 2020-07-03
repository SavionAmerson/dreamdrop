import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <div class="fixed-bottom">
            <nav class="navbar navbar-dark bg-default">
            <button type="button" class="btn btn-outline-light">+ New Dream</button>
            <button type="button" class="btn btn-outline-light">Log out</button>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
