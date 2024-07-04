import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://github.com/00hani"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
        <div>
          <img src={logo} className="logo1" alt="logo" />
          <img src={logo} className="logo2" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
