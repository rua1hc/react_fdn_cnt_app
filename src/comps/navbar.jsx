import React, { Component } from "react";

class NavBar extends Component {
    // state = {  }
    render() {
        console.log("Navbar rendered");
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

// Stateless Functional Component

// const NavBar2 = (props) => {
//detructuring arguments
const NavBar2 = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">
                    Navbar2
                    <span className="badge rounded-pill bg-success  mx-2 ">
                        {/* {props.totalCounters} */}
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};

// export default NavBar2;
