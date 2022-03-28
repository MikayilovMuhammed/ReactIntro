import logo from "./logo.svg";
import "./App.css";
import Button, { ParaghBtn } from "./Button";
import { Paragh } from "./Paragh";
const App = () => {
  const isApp = "yes";

  return (
    <div className="App">
      <header className={`App-header ${isApp}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <Paragh />
        <ParaghBtn />
        <Button />
      </header>
    </div>
  );
};

export default App;
