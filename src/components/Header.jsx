import React from 'react';
import logofull from "../LogoCWFull.png";
import videotrailer from "../Crypto-War-Trailer.mp4";



import RMBOTON from "../RMBOTON.png";
import TBOTON from "../TBoton.png";
import WBOTON from "../WBOTON.png"
import TOKENBOTON from "../TOKENBOTON.png"




function Header() {
    return ( 

    
        
    <header className="Inicio">

        <video className='video-content' muted autoPlay loop>
            <source src={videotrailer} className='video-trailer'/>
        </video>



        <h1 className='Header-Title' >
         ¡<span>ÚNETE</span> A LA BATALLA!
        </h1>

        <div className='Header-Text'>
            <p className='pheader'>
               Entrá al mundo de 
               <img src={logofull} className='Logo-Text-Header'alt="logofull"data-anijs="if: click, do: flipInY animated"/> <br/>
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

          <a href='#' className='not-active'><img src={TOKENBOTON} className='TokenBoton'/></a>
          <a href='#Team'><img src={TBOTON} className='TBoton'alt="botonteam"/></a>
          <a href='#Road-Map'><img src={RMBOTON} className='RMBoton'alt="botonroadmap"/></a>
          <a href="/WhitePaper"><img src={WBOTON} className='WBoton'/></a>
   

        </div>


    </header>



   )   
  }
  

  
  export default Header;
 


