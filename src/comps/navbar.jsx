import React, { Component } from "react";

class NavBar extends Component {
    // state = {  }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        Navbar
                        <span className="badge rounded-pill bg-success  mx-2 ">
                            {this.props.totalCounters}
                        </span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default NavBar;
