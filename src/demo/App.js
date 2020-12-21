import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="App-logo1" alt="logo" />
          <img src={logo} className="App-logo4" alt="logo" />
        </div>
        <span>
          <img src={logo} className="App-logo3" alt="logo" />
          <img src={logo} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo1" alt="logo" />
        </span>
        <div className="container">
          <img src={logo} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo4" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
