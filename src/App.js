import logo from './CWLOGOSHORT.png';
import logofull from "./LogoCWFull.png";
import './App.css';
import CardDonate from "./components/CardDonate"
import CardTrailer from './components/CardTrailer';

function App() {
  return (
    <div className="App">
      <navbar className="NavBar">
        <img src={logofull} className="NavBar-logo" alt="logo" />

        probando navbar


      </navbar>
      <header className="App-header">

        <h1 className='Header-Title'>
          ¡ÚNETE A LA BATALLA!
        </h1>

        <p className='pheader'>
          Entrá al mundo de 
          <img src={logofull} className='Logo-Text-Header'/> <br/>
          Conquista reinos, lucha contra bestias <br/>
          destruye a los <strong>Jefes</strong> <br/>
          y vive la experiencia medieval.

        </p>      
      </header>

      <section className='Game-Trailer'>
        <div>

          <h1 className='Game-Trailer-Title'>
           GAME<br />
           TRAILER
          </h1>

        </div>
          
        <div>
          <CardTrailer/>
        </div>

      </section>
      <section className='Game-Story'>

        <h1 className='Game-Story-Title'>
          GAME<br />
          STORY
        </h1>


      </section>
      <section className='Game-Play'>

        <h1 className='Game-Play-Title'>
          GAME<br />
          PLAY
        </h1>


      </section>
      <section className='Cofres'>

        <h1 className='Cofres-Title'>
          COFRES

        </h1>


      </section>
      <section className='Team'>

        <h1 className='Team-Title'>
          TEAM

        </h1>


      </section>
      <section className='Road-Map'>

        <h1 className='Road-Map-Title'>
          ROAD<br />
          MAP
        </h1>


      </section>
      <footer className="Page-Footer">
        <a className='Terminos-y-Condiciones'>Términos y Condiciones<br/>
        de uso</a>
        <a className='Privacidad'>Privacidad</a> 
      </footer>
      
      
      
      
    </div>
  );
}

export default App;
