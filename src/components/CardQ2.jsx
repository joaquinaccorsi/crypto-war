import React from 'react';
import logoshort from "../CWLOGOSHORT.png";

function CardQ2() {
    return ( 
<div className='Card-Q2'>
    <div className='card-header-Q'>
     <h3 className='card-title-Q'>Q2</h3>
     <img src={logoshort} className='LogoCardRM'alt='logoshort'/>
    </div>
    <p className='pQ'>
      -White List​<br/>
     -Preventa Privada del Token​<br/>
     -Auditoria del token​<br/>
     -Contratos de los NFT​
         
    </p>

</div>
 );

}

export default CardQ2;