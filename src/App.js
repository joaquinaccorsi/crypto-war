
import logofull from "./LogoCWFull.png";
import logoshort from "./CWLOGOSHORT.png";

import RMBOTON from "./RMBOTON.png";
import TBOTON from "./TBoton.png";
import HOMEBOTON from "./FlechaArriba1.png";

import DragonAzul from "./dragon azul.png";
import Imperios from "./imperios.png";
import RMBoton from "./RMBOTON.png";
import BotonRegistro from "./BotonRegistro.png";
import Guerrera from "./guerrera.png";
import Ninja from "./ninja.png";
import "./Animation";
import './App.css';

import CardDonate from "./components/CardDonate"
import CardTrailer from './components/CardTrailer';

import CardStory from './components/CardStory';

import CardTeamJoaquin from './components/CardTeamJoaquin';
import CardTeamChristian from "./components/CardTeamChristian";
import CardTeamAitor from "./components/CardTeamAitor";
import CardTeamMatias from "./components/CardTeamMatias"

import CardQ1 from "./components/CardQ1";
import CardQ2 from "./components/CardQ2";
import CardQ3 from "./components/CardQ3";
import CardQ4 from "./components/CardQ4";
import CardQ5 from "./components/CardQ5";




function App() {
  return (
    <div className="App">
      <navbar className="NavBar">
        <img src={logofull} className="NavBar-logo" alt="logo" />

        <a href="Inicio" ><img src={HOMEBOTON} className="BotonHome"/></a>

       <nav className='menu'>
         <a href='#' className='InicioSesion'> iniciá sesión</a>
         <a href='#'><img src={BotonRegistro} className='BotonRegistro'/></a>         
       </nav>

      </navbar>
      <header className="Inicio">

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
          <a href='#Team'><img src={TBOTON} className='TBoton'/></a>
          <a href='#Road-Map'><img src={RMBOTON} className='RMBoton'/></a>
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
          <h3 className="GP-SubTitles">
           <span>JUEGO NFT</span><br/>
           PLAY-<span>TO</span>-EARN<br/>
           MMO<br/>
           RPG
          </h3>


          <h3 className="GP-SubTitles">
            <span>PvP</span><br/>
            PvM<br/>
            EVENTOS <span>MIXTOS</span>
          </h3>

          <h3 className="GP-SubTitles">
           CUMPLE<br/>
           <span>MISIONES
           DIARIAS<br/></span>
           PARA GANAR TUS <span>RECOMPENSAS</span>
          </h3>
          </div>



      </section>
      <section className='Cofres'>

        <h1 className='Cofres-Title'>
          COFRES
        </h1>

        <div className='RecursosCofres'>
        <img src={Guerrera} className='Guerrera'/>
        <img src={Ninja} className='Ninja'/>
        </div>




      </section>
      <section className='Team' id="Team">

        <h1 className='Team-Title'>
          <span>TEAM</span>
        </h1>

        <div className="Cards-Team">
          <CardTeamChristian/>
          <CardTeamJoaquin/>
          <CardTeamAitor/>
          <CardTeamMatias/>
        </div>

      </section>
      <section className='Road-Map' id='Road-Map'>

        <h1 className='Road-Map-Title'>
          ROAD<br />
          <span>MAP</span>
         
        </h1>
        <div className="Cards-RM1">
          <CardQ1/>
          <CardQ2/>
          <CardQ3/>
        </div>
        <div className="Cards-RM2">
          <CardQ4/>
          <CardQ5/>
        </div>


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
