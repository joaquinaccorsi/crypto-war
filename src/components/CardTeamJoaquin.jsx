import React from 'react';
import PerfilJoaquin from "./img/PerfilJoaquin.jpg";

function CardTeamJoaquin() {
    return ( 
<div className='Card-Team-Joaquin'>

    <img src={PerfilJoaquin} className='Perfil-Joaquin'/>

    <p className='pNameTeam'>
        Joaquín <span>Accorsi</span>

    </p>
    <p className='pRolTeam'>
    CTO - Diseño 
    </p>




</div>
 );

}

export default CardTeamJoaquin;