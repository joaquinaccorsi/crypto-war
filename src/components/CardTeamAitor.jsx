import React from 'react';
import PerfilAitor from "../PerfilAitor.jpg";

function CardTeamAitor() {
    return ( 
<div className='Card-Team-Aitor'>

    <img src={PerfilAitor} className='Perfil-Aitor'/>

    <p className='pNameTeam'>
        Aitor <span>Soler</span>

    </p>
    <p className='pRolTeam'>
    MARKETING
    </p>




</div>
 );

}

export default CardTeamAitor;