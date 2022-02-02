import React from 'react';
import logofull from "../LogoCWFull.png";

import RMBOTON from "../RMBOTON.png";
import TBOTON from "../TBoton.png";


function Header() {
    return ( 
    <header className="Inicio">


        <h1 className='Header-Title'>
         ¡<span>ÚNETE</span> A LA BATALLA!
        </h1>

        <div className='Header-Text'>
            <p className='pheader'>
               Entrá al mundo de 
               <img src={logofull} className='Logo-Text-Header'alt="logofull"/> <br/>
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
          <a href='#Team'><img src={TBOTON} className='TBoton'alt="botonteam"/></a>
          <a href='#Road-Map'><img src={RMBOTON} className='RMBoton'alt="botonroadmap"/></a>
          <a href='#Game-Trailer'><img src={"#"} className='GTBoton'/></a>
   

        </div>


    </header>

   )   
  }
  
  
  export default Header;


