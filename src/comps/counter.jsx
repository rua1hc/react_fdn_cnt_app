import React, { Component } from "react";

class Counter extends Component {
    state = {
        // count: 0,
        // value: this.props.counter.value,

        imgUrl: "https://picsum.photos/200",

        // tags: [],
        tags: ["tag1", "tag2", "tag3"],
    };

    // styles = {
    //     fontSize: 20,
    //     fontWeight: "bold",
    // };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement() {
    //     console.log("increment", this);
    // }
    // handleIncrement = () => {
    //     // console.log("increment", this);
    //     this.setState({ value: this.state.value + 1 });
    // };
    // handleIncrement_product = () => {
    //     console.log("product id later");
    //     this.setState({ value: this.state.value + 1 });
    // };

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call- get new data from server
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    render() {
        // console.log("props", this.props);
        console.log("Counter rendered");

        return (
            // <React.Fragment>
            <div>
                {this.props.children}
                <h6>or normal props: counter {this.props.counter.id}</h6>

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
                    {/* Sum: {this.formatCount()} */}
                    {this.formatCount()}
                </span>

                {/* <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button> */}
                <button
                    // onClick={() => this.handleIncrement_product()}
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>

                {/* <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul> */}
                {/* <div>
                    {this.state.tags.length !== 0 && "Please create a new tag!"}
                </div>
                {this.renderTags()} */}

                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
            // </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
