import './App.css';



import DragonAzul from "./dragon azul.png";
import Imperios from "./imperios.png";
import Guerreros from "./Guerreros.png";
import Ninjas from "./Ninjas.png";

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

import Header from './components/Header';



import Navbar from './components/Navbar';

import Footer from "./components/Footer";

import SocialMedia from './components/SocialMedia';














function App() {


  return (
    <div className="App" >

      <Navbar/>

      <Header/>

      <SocialMedia/>


 


      <section className='Game-Trailer'>
        <CardTrailer/>

        <h1 className='Game-Trailer-Title'>
          GAME<br />
          <span>TRAILER</span><br/>
          <img src={DragonAzul} className='Dragon-Azul' id='Dragon-Azul'alt="dragonazul"/>
          
        </h1>

      </section>
      <section className='Game-Story'>
          <h1 className='Game-Story-Title'>
            GAME<br />
            <span>STORY</span><br/>
            <img src={Imperios} className='Imperios'alt="imperios"/>
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
           <span>JUEGO NFT</span><br/><br/>
           PLAY<br/><span>TO</span><br/>EARN<br/><br/>
           MMO 
           <span>RPG</span>
          </h3>


          <h3 className="GP-SubTitles">
            <span>PvP</span><br/><br/>
            PvM<br/><br/>
            EVENTOS <br/><span>MIXTOS</span>
          </h3>

          <h3 className="GP-SubTitles">
           CUMPLE<br/>
           <span>MISIONES
           DIARIAS<br/></span>
           PARA GANAR<br/>
           TUS <br/><span>RECOMPENSAS</span>
          </h3>
          </div>



      </section>
      <section className='Cofres'>

        <h1 className='Cofres-Title'>
          COFRES
        </h1>

        <div className='RecursosCofres'>
        <img src={Guerreros} className='Guerrera'alt="guerrera"/>
        
        <img src={Ninjas} className='Ninja'alt="ninja"/>
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

      <Footer/>

            
    </div>
    
  );
}



export default App;
