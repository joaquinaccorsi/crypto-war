import React from 'react';
import logoshort from "../CWLOGOSHORT.png";

function CardQ1() {
    return ( 
<div className='Card-Q1'>
    <div className='card-header-Q'>
     <h3 className='card-title-Q'>Q1</h3>
     <img src={logoshort} className='LogoCardRM'alt='logoshort'/>
    </div>
    <p className='pQ'>
        -Desarrollo de la <span>IDEA</span><br/>
        -Lanzamiento de Redes Sociales<br/>
        -Lanzamiento Landing Page<br/>
        -Marketing/Youtubers/Influencers<br/>
        -Donaciones<br/>
        -Preventa Inversores<br/>
         
    </p>

</div>
 );

}

export default CardQ1;