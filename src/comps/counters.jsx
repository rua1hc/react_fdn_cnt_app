import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    // onClick={this.handleReset}
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>

                {this.props.counters.map((c) => (
                    <Counter
                        key={c.id}
                        // onDelete={this.handleDelete}
                        onDelete={this.props.onDelete}
                        // onIncrement={this.handleIncrement}
                        onIncrement={this.props.onIncrement}
                        // value={c.value}
                        // id={c.id}
                        counter={c}
                    >
                        <h6>Children props: Counter {c.id}</h6>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
