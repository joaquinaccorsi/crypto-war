import React from 'react';
import PerfilChristian from "../PerfilChristian.png";
import IconInstagram from "../IconInstagram.png";
import IconLinkedin from "../IconLinkedin.png";

function CardTeamChristian() {
    return ( 
<div className='Card-Team-Christian'>

    <img src={PerfilChristian} className='Perfil-Christian'alt='fotoperfil'/>

    <p className='pNameTeam'>
        Cristian <span>Fernandez</span>

    </p>
    <p className='pRolTeam'>
    CEO - ECONOMISTA 
    </p>

    <div className='SocialMediaTeam'>
            <a href='#' target="_blank"><img src= {IconInstagram} className='IconInstagramTeam'/></a>

            <a href='#' target="_blank"><img src={IconLinkedin} className='IconLinkedinTeam'/></a>
    </div>




</div>
 );

}

export default CardTeamChristian;