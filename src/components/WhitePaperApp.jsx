import logofull from "../LogoCWFull.png";
import React from 'react';
import IconInstagram from "../IconInstagram.png";
import IconDiscord from "../IconDiscord.png";
import IconFacebook from "../IconFacebook.png";
import IconTwitter from "../IconTwitter.png";
import IconLinkedin from "../IconLinkedin.png";
import IconTelegram from "../telegrama.png";



function WhitePaperApp (){
  return    (




    <div className="WhitePaper">


      <div className="TituloWP">
        <img src={logofull}className="LogoWP"/>
        
        <a href='https://www.instagram.com/cryptowaroficial/' target="_blank"className='aWP'><img src= {IconInstagram} className='IconInstagramWP'/></a>
        <a href='https://discord.gg/s8uD7a6PyM'target="_blank"className='aWP'><img src= {IconDiscord} className='IconDiscordWP'/></a>
        <a href='https://www.facebook.com/CryptoWar-100465312564842'target="_blank"className='aWP'><img src= {IconFacebook}className='IconFacebookWP'/></a>
        <a href='https://twitter.com/CryptoWar_CW'target="_blank"className='aWP'><img src= {IconTwitter} className='IconTwitterWP'/></a>
        <a href='https://www.linkedin.com/company/crypto-war'target="_blank"className='aWP'><img src={IconLinkedin} className='IconLinkedinWP'/></a>
        <a href='https://t.me/CryptoWarOficial'target="_blank"className='aWP'><img src={IconTelegram} className='IconTelegramWP'/></a>
        <a href="/" className="Atrás">VOLVER</a>
        


      </div>

      <div className="NavBarWhitePaper"> 
    
        <a href="/WhitePaper/Tokenomics"  className="LinkTokenomics">TOKENOMICS</a>
        <a href="/WhitePaper/Recompensas" className="LinkRecompensas">RECOMPENSAS</a>
        <a href="/WhitePaper/Tokenomics"  className="LinkTokenomics">xxxxxx</a>
        <a href="/WhitePaper/Recompensas" className="LinkRecompensas">xxxxxx</a>
        <a href="/WhitePaper/Tokenomics"  className="LinkTokenomics">xxxxxx</a>
        <a href="/WhitePaper/Recompensas" className="LinkRecompensas">xxxxxx</a>

      </div>

    </div>



  );
}

export default WhitePaperApp;