import { useState } from "react";
import "./App.css";
import Selector from "./components/Selector";
import Showcase from "./components/Showcase";
import Calculate from "./components/Calculate";
import SelectSeat from "./components/SelectSeat";

function App() {
    return (
        <div className="App">
            <Selector />
            <Showcase />
            <SelectSeat />
            <Calculate />
        </div>
    );
}

export default App;
