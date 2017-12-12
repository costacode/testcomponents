import React, { Component } from 'react';

function ButtonCounter({ onAction }) {
    return <button onClick={onAction}>Click me</button>;
}

class Counting extends Component {
    state = {
        actionCount: 0
    };

    handleAction = action => {
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    };

    render() {
        return (
            <div>
                <ButtonCounter onAction={this.handleAction} />
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}

export default Counting;
