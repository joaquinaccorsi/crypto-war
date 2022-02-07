import React from 'react';
import logofull from "../LogoCWFull.png";

function CardTrailer() {
    return ( 
<div className='Card-Trailer'>
    <div className='card-title'>
     <h3 className='Title-Card-Trailer'>TRAILER OFICIAL <img src={logofull} className='Game-Trailer-Logo'alt='logofull'/></h3>
    </div>
    <div className='card-body'>
      <h1 className="EnProceso">en proceso...</h1>
    </div>
</div>
 );

}

export default CardTrailer;