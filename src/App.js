import logo from './CWLOGOSHORT.png';
import logofull from "./LogoCWFull.png";
import './App.css';
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <navbar className="NavBar">
        <img src={logofull} className="NavBar-logo" alt="logo" />

        probando navbar

      
      </navbar>
      <header className="App-header">
        
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
      <section className='DonatePage'>
        <h1 className='TitleDonatePage'>
          Apoyanos y obtené beneficios
          exclusivos en <img src={logofull} className="Title-Logo"/>
        </h1>
      </section>
    </div>
  );
}

export default App;
