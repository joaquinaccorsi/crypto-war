import logo from './CWLOGOSHORT.png';
import logofull from "./LogoCWFull.png";
import DragonAzul from "./dragon azul.png";
import Imperios from "./imperios.png";
import RMBoton from "./RMBOTON.png";
import BotonRegistro from "./BotonRegistro.png";
import "./Animation";
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
         <a href='#' className='InicioSesion'> iniciá sesión</a>
         <a href='#'><img src={BotonRegistro} className='BotonRegistro'/></a>         
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

        <p className='pheader'>

         - <span>MMORPG</span> de ACCIÓN/AVENTURA
         <br/>
         - PLAY- <span>TO</span> - EARN
         <br/>
         - MARKET PLACE <span>NFT</span>
         <br/>
         - TIENDA OFICIAL <span>CW STORE</span>
         <br/>

        </p> 
        </div>  

        <div className='BotonesHeader'>

          <a href='#Game-Trailer'><img src={"#"} className='GTBoton'/></a>
          <a href='#Game-Story'><img src={"#"} className='GSBoton'/></a>
          <a href='#Game-Play'><img src={"#"} className='GPBoton'/></a>
          <a href='#Cofres'><img src={"#"} className='CBoton'/></a>
          <a href='#Team'><img src={"#"} className='TBoton'/></a>
          <a href='#Road-Map'><img src={RMBoton} className='RMBoton'/></a>
          <a href='#Game-Trailer'><img src={"#"} className='GTBoton'/></a>
           

        </div>

 
      </header>

      <section className='Game-Trailer'>
        <CardTrailer/>

        <h1 className='Game-Trailer-Title'>
          GAME<br />
          <span>TRAILER</span><br/>
          <img src={DragonAzul} className='Dragon-Azul' id='Dragon-Azul'/>
          
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
      <section className='Road-Map' id='Road-Map'>

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
