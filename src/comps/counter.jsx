import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };
    render() {
        return (
            <React.Fragment>
                {/* <span>Sum: {this.state.count}</span> */}
                <span>Sum: {this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
