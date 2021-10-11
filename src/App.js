import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstCard from "./components/hicards/FirstCard";
import SecondCard from "./components/hicards/SecondCard";
import DeshBoard from "./components/hicards/DeshBoard";

function App() {
  return (
    <div className="App">
      <FirstCard />
      <SecondCard />
      <DeshBoard />
    </div>
  );
}

export default App;
