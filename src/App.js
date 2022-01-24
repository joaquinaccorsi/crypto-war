import logo from './CWLOGOSHORT.png';
import logofull from "./LogoCWFull.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar className="NavBar">
        <img src={logofull} className="NavBar-logo" alt="logo" />

        probando navbar

      
      </navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡ÚNETE A LA BATALLA!
        </p>
        <a
          className="App-link"
          href="https://discord.gg/2Vf9jmNM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crypto War
        </a>
      </header>
    </div>
  );
}

export default App;
