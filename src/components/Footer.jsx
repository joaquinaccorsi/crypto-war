import React from 'react';
import IconInstagram from "../IconInstagram.png";
import IconDiscord from "../IconDiscord.png";
import IconFacebook from "../IconFacebook.png";
import IconTwitter from "../IconTwitter.png";
import IconLinkedin from "../IconLinkedin.png";
import IconTelegram from "../telegrama.png";

function Footer() {
    return (
        <footer className="Page-Footer">
            <a className='Terminos-y-Condiciones'>Términos y Condiciones<br/>
               de uso
            </a>

            <a href='https://www.instagram.com/cryptowaroficial/' target="_blank"><img src= {IconInstagram} className='IconInstagramFooter'/></a>
            <a href='https://discord.gg/s8uD7a6PyM'target="_blank"><img src= {IconDiscord} className='IconDiscordFooter'/></a>
            <a href='https://www.facebook.com/CryptoWar-100465312564842'target="_blank"><img src= {IconFacebook}className='IconFacebookFooter'/></a>
            <a href='https://twitter.com/CryptoWar_CW'target="_blank"><img src= {IconTwitter} className='IconTwitterFooter'/></a>
            <a href='https://www.linkedin.com/company/crypto-war'target="_blank"><img src={IconLinkedin} className='IconLinkedinFooter'/></a>
            <a href='https://t.me/CryptoWarOficial'target="_blank"><img src={IconTelegram} className='IconTelegramFooter'/></a>
            <a className='Privacidad'>Privacidad</a> 

        </footer>

    )


    
}

export default Footer;

