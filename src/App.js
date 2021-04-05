import "./App.css";
import Selector from "./components/Selector";
import Showcase from "./components/Showcase";
import SelectSeat from "./components/SelectSeat";
import Calculate from "./components/Calculate";

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
