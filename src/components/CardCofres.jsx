
import React from 'react';
import logoshort from "../CWLOGOSHORT.png";

function CardCofres (){
  
return (
    <div className='Card-Cofres'>

        <div className='card-header-cofres'>
           <h3 className='card-title-cofres'><span>INVERTÍ</span> EN TU KIT DE INICIO</h3>
        
        </div>
        <p className='pCofres'>

            En proceso...
            <img src={logoshort} className='LogoCardCofres'alt='logoshort'/>
       
        </p>

    </div>

  

    
    );
}


export default CardCofres;
