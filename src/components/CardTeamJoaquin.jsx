import React from 'react';
import PerfilJoaquin from "../PerfilJoaquin.jpg";

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




</div>
 );

}

export default CardTeamJoaquin;