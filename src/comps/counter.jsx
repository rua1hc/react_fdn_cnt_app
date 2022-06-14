import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,

        imgUrl: "https://picsum.photos/200",
    };

    // styles = {
    //     fontSize: 20,
    //     fontWeight: "bold",
    // };

    render() {
        return (
            <React.Fragment>
                {/* <img src={this.state.imgUrl} alt="" /> */}

                {/* <span>Sum: {this.state.count}</span> */}
                {/* <span style={this.styles} className="badge bg-primary m-2">
                    Sum: {this.formatCount()}
                </span> */}
                {/* <span style={{ fontSize: 20 }} className="badge bg-primary m-2">
                    Sum: {this.formatCount()}
                </span> */}

                {/* <span className="badge bg-primary m-2">
                    Sum: {this.formatCount()}
                </span> */}
                <span className={this.getBadgeClasses()}>
                    Sum: {this.formatCount()}
                </span>

                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
