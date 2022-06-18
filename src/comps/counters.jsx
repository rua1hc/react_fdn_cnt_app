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

    render() {
        return (
            <div>
                {this.state.counters.map((c) => (
                    <Counter
                        key={c.id}
                        value={c.value}
                        selected
                        id={c.id}
                        onDelete={this.handleDelete}
                    >
                        <h6>Children props: Counter {c.id}</h6>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
