import React, { Component } from "react";
import ReactDOM from "react-dom/client"; 
import HomePage from "./HomePage"
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div><HomePage/></div>)
    }
}

// Initialize and render the app using createRoot
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
