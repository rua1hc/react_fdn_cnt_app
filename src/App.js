import React, { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

import NavBar from "./comps/navbar";
import Counters from "./comps/counters";

class App extends Component {
    // function App() {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 6 },
            { id: 3, value: 7 },
            { id: 4, value: 8 },
        ],
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        let counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        let counters = [...this.state.counters];
        let counterID = counters.indexOf(counter);
        counters[counterID] = { ...counter };
        counters[counterID].value++;
        this.setState({ counters });
    };

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.reduce(
                        (previousValue, counter) =>
                            previousValue + counter.value,
                        0
                    )}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                </main>
            </React.Fragment>
        );
    }

    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   );
}

export default App;
