import React, { Component } from 'react';


export default class App extends Component {

    constructor() {
        super();
        this.state = {
            firstName: 'Test',
            lastName: 'User'
        };
    }

    formatName() {
        const { firstName, lastName } = this.state;
        return `${firstName} ${lastName}`;
    }

    render() {
        return (
            <div>
                <h2>Hello, {this.formatName()}!</h2>
            </div>
        );
    }
}
