import React from 'react';
import logofull from "../LogoCWFull.png";
import videotrailer from "../Crypto-War-Trailer.mp4"

import RMBOTON from "../RMBOTON.png";
import TBOTON from "../TBoton.png";
import IconInstagram from "../IconInstagram.png";
import IconDiscord from "../IconDiscord.png";
import IconFacebook from "../IconFacebook.png";
import IconTwitter from "../IconTwitter.png";
import IconLinkedin from "../IconLinkedin.png";



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

          <a href='#Game-Trailer'><img src={"#"} className='GTBoton'/></a>
          <a href='#Game-Story'><img src={"#"} className='GSBoton'/></a>
          <a href='#Game-Play'><img src={"#"} className='GPBoton'/></a>
          <a href='#Cofres'><img src={"#"} className='CBoton'/></a>
          <a href='#Team'><img src={TBOTON} className='TBoton'alt="botonteam"/></a>
          <a href='#Road-Map'><img src={RMBOTON} className='RMBoton'alt="botonroadmap"/></a>
          <a href='#Game-Trailer'><img src={"#"} className='GTBoton'/></a>
   

        </div>
        <h1 className='SocialMedia-Title'>
            ¡SUMATE A LA COMUNIDAD!
        </h1>
        <div className='SocialMedia'>
            <a href='#'><img src= {IconInstagram} className='IconInstagram'/></a>
            <a href='#'><img src= {IconDiscord} className='IconDiscord'/></a>
            <a href='#'><img src= {IconFacebook}className='IconFacebook'/></a>
            <a href='#'><img src= {IconTwitter} className='IconTwitter'/></a>
            <a href='#'><img src={IconLinkedin} className='IconLinkedin'/></a>
        </div>


    </header>



   )   
  }
  

  
  export default Header;
 


