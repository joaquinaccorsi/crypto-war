import React from 'react';
import PerfilChristian from "../PerfilChristian.png";

function CardTeamChristian() {
    return ( 
<div className='Card-Team-Christian'>

    <img src={PerfilChristian} className='Perfil-Christian'/>

    <p className='pNameTeam'>
        Christian <span>Fernandez</span>

    </p>
    <p className='pRolTeam'>
    CEO - ECONOMISTA 
    </p>




</div>
 );

}

export default CardTeamChristian;