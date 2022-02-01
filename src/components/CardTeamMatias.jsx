import React from 'react';
import PerfilMatias from "../PerfilMatias.jpg";

function CardTeamMatias() {
    return ( 
<div className='Card-Team-Matias'>

    <img src={PerfilMatias} className='Perfil-Matias'alt='fotoperfil'/>

    <p className='pNameTeam'>
        Matias <span>Andreu</span>

    </p>
    <p className='pRolTeam'>
    CONTENIDO<br/> 
    AUDIO-VISUAL
    </p>




</div>
 );

}

export default CardTeamMatias;