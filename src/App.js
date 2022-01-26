import logo from './CWLOGOSHORT.png';
import logofull from "./LogoCWFull.png";
import DragonAzul from "./dragon azul.png"
import Imperios from "./imperios.png"
import './App.css';

import CardDonate from "./components/CardDonate"
import CardTrailer from './components/CardTrailer';
import CardStory from './components/CardStory';

function App() {
  return (
    <div className="App">
      <navbar className="NavBar">
        <img src={logofull} className="NavBar-logo" alt="logo" />

       <nav className='menu'>
         <a href='#'> inicia sesión</a>
         <a href='#'> ¡REGISTRATE!</a>         
       </nav>


      </navbar>
      <header className="App-header">

        <h1 className='Header-Title'>
          ¡<span>ÚNETE</span> A LA BATALLA!
        </h1>

        <div className='Header-Text'>
        <p className='pheader'>
          Entrá al mundo de 
          <img src={logofull} className='Logo-Text-Header'/> <br/>
          Conquista reinos, lucha contra bestias <br/>
          destruye a los <strong>Jefes</strong> <br/>
          y vive la experiencia medieval.
        </p>

        <p className='pheader'>adasd</p>
        <br/>
        <p className='pheader'>adad</p>
        <br/>
        <p className='pheader'>asadasd</p>
        <br/>
        <p className='pheader'>asdasd</p>
        <br/>
        <p className='pheader'>adad</p>     

        </div>

 
      </header>

      <section className='Game-Trailer'>
        <CardTrailer/>

        <h1 className='Game-Trailer-Title'>
          GAME<br />
          <span>TRAILER</span><br/>
          <img src={DragonAzul} className='Dragon-Azul'/>
        </h1>

      </section>
      <section className='Game-Story'>
          <h1 className='Game-Story-Title'>
            GAME<br />
            <span>STORY</span><br/>
            <img src={Imperios} className='Imperios'/>
          </h1>
          <CardStory/>
      </section>
      <section className='Game-Play'>
        <h1 className='Game-Play-Title'>
          GAME<br/>
          <span>PLAY</span>
        </h1>

        <div className='GP-Text'>
        <h3>
          <span>JUEGO NFT</span><br/>
          PLAY-<span>TO</span>-EARN<br/>
          MMO<br/>
          RPG
        </h3>


          <h3>
            <span>PvP</span><br/>
            PvM<br/>
            EVENTOS <span>MIXTOS</span>
          </h3>

          <h3>
          CUMPLE<br/>
          <span>MISIONES<br/>
          DIARIAS<br/></span>
          PARA GANAR TUS <span>RECOMPENSAS</span>

          </h3>
          </div>



      </section>
      <section className='Cofres'>

        <h1 className='Cofres-Title'>
          COFRES

        </h1>


      </section>
      <section className='Team'>

        <h1 className='Team-Title'>
          <span>TEAM</span>

        </h1>


      </section>
      <section className='Road-Map'>

        <h1 className='Road-Map-Title'>
          ROAD<br />
          <span>MAP</span>
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
