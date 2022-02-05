import React from 'react';
import logofull from "../LogoCWFull.png";
import videotrailer from "../Crypto-War-Trailer.mp4"

import RMBOTON from "../RMBOTON.png";
import TBOTON from "../TBoton.png";
import WBOTON from "../WBOTON.png"
import TOKENBOTON from "../TOKENBOTON.png"
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

          <a href='#'><img src={TOKENBOTON} className='TokenBoton'/></a>
          <a href='#Team'><img src={TBOTON} className='TBoton'alt="botonteam"/></a>
          <a href='#Road-Map'><img src={RMBOTON} className='RMBoton'alt="botonroadmap"/></a>
          <a href='#'><img src={WBOTON} className='WBoton'/></a>
   

        </div>
        <h1 className='SocialMedia-Title'>
            ¡SUMATE A LA COMUNIDAD!
        </h1>
        <div className='SocialMedia'>
            <a href='https://www.instagram.com/cryptowaroficial/' target="_blank"><img src= {IconInstagram} className='IconInstagram'/></a>
            <a href='https://discord.gg/s8uD7a6PyM'target="_blank"><img src= {IconDiscord} className='IconDiscord'/></a>
            <a href='https://www.facebook.com/CryptoWar-100465312564842'target="_blank"><img src= {IconFacebook}className='IconFacebook'/></a>
            <a href='https://twitter.com/CryptoWar_CW'target="_blank"><img src= {IconTwitter} className='IconTwitter'/></a>
            <a href='https://www.linkedin.com/company/crypto-war'target="_blank"><img src={IconLinkedin} className='IconLinkedin'/></a>
        </div>


    </header>



   )   
  }
  

  
  export default Header;
 


