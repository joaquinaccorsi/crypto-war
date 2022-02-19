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
        <a href="/" className="Atrás">inicio</a>
        


      </div>

      <div className="NavBarWhitePaper"> 
    
        <a href="/WhitePaper"  className="LinkCryptoWar"><span className="SpanWP">Crypto War</span></a>
        <a href="/WhitePaper/InfoToken" className="LinkInfoToken">Info Token</a>
        <a href="/WhitePaper/Tokenomics"  className="LinkTokenomics">Tokenomic</a>
        <a href="/WhitePaper/GamePlayW" className="LinkGamePlayW">¿En que consiste Crypto War?</a>
        <a href="/WhitePaper/Recompensas"  className="LinkRecompensasPVM">Recompensas PVM</a>
        <a href="/WhitePaper/Cofres" className="LinkCofres">Cofres</a>
        <a href="/WhitePaper/NFTs" className="LinkNFTs">NFTs</a>
        <a href="/WhitePaper/Eventos" className="LinkEventos">Eventos</a>
        <a href="/WhitePaper/EventosMixtos" className="LinkEventosMixtos">Eventos Mixtos</a>
        <a href="/WhitePaper/EventosPVP" className="LinkEventosPVP">Eventos PVP</a>
        <a href="/WhitePaper/QuemaNFT" className="LinkQuemaNFT">Quema NFT</a>
        <a href="/WhitePaper/Claim" className="LinkClaim">Claim</a>
        <a href="/WhitePaper/MarketPlace" className="LinkMarketPlace">Marketplace</a>
        <a href="/WhitePaper/Oraculo" className="LinkOraculo">Oraculo</a>
        <a href="/WhitePaper/Educacion" className="LinkEducacion">Educación</a>
        <a href="/WhitePaper/PlanesFuturos" className="LinkPlanesFuturos">Planes futuros</a>



      </div>
      <div className="WhitePaperContent">
        <h1 className="WhitePaperContentTitle">

          CRYPTO WAR

        </h1>
        <p className="WhitePaperContentText">
        CryptoWar es un juego <strong>NFT MMORPG Play-To-Earn</strong> a mundo abierto
        en el que los jugadores pueden interactuar entre ellos, hacer amigos, formar gremios, levear juntos y competir !
        <br/>
        <br/>
         CryptoWar <strong>NO</strong> es un click-to-earn!!!<br/>
          El juego esta diseñado para que los jugadores participen, se diviertan, compitan y ganen dinero.<br/>
         Por eso decidimos escoger la jugabilidad de un MMORPG!
        </p>
      </div>

    </div>



  );
}

export default WhitePaperApp;