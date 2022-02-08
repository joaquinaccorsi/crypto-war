import React from 'react';
import IconInstagram from "../IconInstagram.png";
import IconDiscord from "../IconDiscord.png";
import IconFacebook from "../IconFacebook.png";
import IconTwitter from "../IconTwitter.png";
import IconLinkedin from "../IconLinkedin.png";
import IconTelegram from "../telegrama.png";

function SocialMedia() {

    return ( 
        <div className='SocialMedia'>
            <h1 className='SocialMedia-Title'>
            ¡SÚMATE A LA <span>COMUNIDAD</span>!
            </h1>
            <a href='https://www.instagram.com/cryptowaroficial/' target="_blank"><img src= {IconInstagram} className='IconInstagram'/></a>
            <a href='https://discord.gg/s8uD7a6PyM'target="_blank"><img src= {IconDiscord} className='IconDiscord'/></a>
            <a href='https://www.facebook.com/CryptoWar-100465312564842'target="_blank"><img src= {IconFacebook}className='IconFacebook'/></a>
            <a href='https://twitter.com/CryptoWar_CW'target="_blank"><img src= {IconTwitter} className='IconTwitter'/></a>
            <a href='https://www.linkedin.com/company/crypto-war'target="_blank"><img src={IconLinkedin} className='IconLinkedin'/></a>
            <a href='https://t.me/CryptoWarOficial'target="_blank"><img src={IconTelegram} className='IconTelegram'/></a>
        </div>




   );   
  }
  

  
  export default SocialMedia;