import React, { Component } from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/join" element={<RoomJoinPage />} />
                        <Route path="/create" element={<CreateRoomPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

// Initialize and render the app using createRoot
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

