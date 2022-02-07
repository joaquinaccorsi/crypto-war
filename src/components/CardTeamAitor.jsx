import React from 'react';
import PerfilAitor from "../PerfilAitor.jpg";
import IconInstagram from "../IconInstagram.png";
import IconLinkedin from "../IconLinkedin.png";

function CardTeamAitor() {
    return ( 
<div className='Card-Team-Aitor'>

    <img src={PerfilAitor} className='Perfil-Aitor'alt='fotoperfil'/>

    <p className='pNameTeam'>
        Aitor <span>Soler</span>

    </p>
    <p className='pRolTeam'>
    MARKETING
    </p>
    <div className='SocialMediaTeam'>
            <a href='https://www.instagram.com/im.aitorsolersanchez/' target="_blank"><img src= {IconInstagram} className='IconInstagramTeam'/></a>

            <a href='#' target="_blank"><img src={IconLinkedin} className='IconLinkedinTeam'/></a>
    </div>




</div>
 );

}

export default CardTeamAitor;