import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 6 },
            { id: 3, value: 7 },
            { id: 4, value: 8 },
        ],
    };

    handleDelete = (counterId) => {
        let counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 10;
            return c;
        });
        this.setState({ counters });
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>

                {this.state.counters.map((c) => (
                    <Counter
                        key={c.id}
                        onDelete={this.handleDelete}
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
