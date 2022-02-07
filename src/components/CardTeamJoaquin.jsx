import React from 'react';
import PerfilJoaquin from "../PerfilJoaquin.jpg";
import IconInstagram from "../IconInstagram.png";
import IconLinkedin from "../IconLinkedin.png";
function CardTeamJoaquin() {
    return ( 
<div className='Card-Team-Joaquin'>

    <img src={PerfilJoaquin} className='Perfil-Joaquin'alt='fotoperfil'/>

    <p className='pNameTeam'>
        Joaquín <span>Accorsi</span>

    </p>
    <p className='pRolTeam'>
    CTO - DISEÑO 
    </p>

    <div className='SocialMediaTeam'>
            <a href='https://www.instagram.com/joaquinaccorsi' target="_blank"><img src= {IconInstagram} className='IconInstagramTeam'/></a>

            <a href='https://www.linkedin.com/in/joaquinaccorsi/' target="_blank"><img src={IconLinkedin} className='IconLinkedinTeam'/></a>
    </div>




</div>
 );

}

export default CardTeamJoaquin;