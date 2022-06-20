import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log("Counters rendered");

        const { onReset, counters, onDelete, onIncrement, onDecrement } =
            this.props;
        return (
            <div>
                <button
                    // onClick={this.handleReset}
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>

                {counters.map((c) => (
                    <Counter
                        key={c.id}
                        // onDelete={this.handleDelete}
                        onDelete={onDelete}
                        // onIncrement={this.handleIncrement}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
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
