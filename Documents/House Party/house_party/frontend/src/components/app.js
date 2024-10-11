import React, { Component } from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from react-dom/client

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Testing React Code</h1>;
    }
}

// Initialize and render the app using createRoot
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
