import React, { Component } from "react"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-light bg-light p-2 text-center">
        <a className="navbar-brand" href="#">
          Shopping List &nbsp;
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    )
  }
}

export default Navbar
