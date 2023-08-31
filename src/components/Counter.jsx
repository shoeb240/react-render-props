import React from "react";

class Counter extends React.Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState((prevState) => ({count: parseInt(prevState.count) + parseInt(this.props.inc)}));
    };

    render() {
        const {count} = this.state;
        const {children, inc} = this.props;
        return children(count, this.incrementCount, inc);
    }
}

export default Counter;