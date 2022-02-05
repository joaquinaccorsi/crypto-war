import React from 'react';
import PerfilMatias from "../PerfilMatias.jpg";
import IconInstagram from "../IconInstagram.png";
import IconLinkedin from "../IconLinkedin.png";

function CardTeamMatias() {
    return ( 
<div className='Card-Team-Matias'>

    <img src={PerfilMatias} className='Perfil-Matias'alt='fotoperfil'/>

    <p className='pNameTeam'>
        Matias <span>Andreu</span>

    </p>
    <p className='pRolTeam'>
     
    AUDIO-VISUAL
    </p>
    <div className='SocialMediaTeam'>
            <a href='#' target="_blank"><img src= {IconInstagram} className='IconInstagramTeam'/></a>

            <a href='#' target="_blank"><img src={IconLinkedin} className='IconLinkedinTeam'/></a>
    </div>




</div>
 );

}

export default CardTeamMatias;