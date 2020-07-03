import React from "react";



class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div class="fixed-top">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-default p-4">
              <h5 class="text-white h4">GUEST USER</h5>
              {/* <button type="button" class="btn btn-outline-light">My Dreams</button> */}
            </div>
          </div>
          <nav class="navbar navbar-dark bg-default">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
