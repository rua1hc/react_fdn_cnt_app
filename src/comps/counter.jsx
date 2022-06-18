import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,

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
    handleIncrement = () => {
        // console.log("increment", this);
        this.setState({ count: this.state.count + 1 });
    };
    handleIncrement_product = () => {
        console.log("product id later");
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            // <React.Fragment>
            <div>
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
                    onClick={() => this.handleIncrement_product()}
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
            </div>
            // </React.Fragment>
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
