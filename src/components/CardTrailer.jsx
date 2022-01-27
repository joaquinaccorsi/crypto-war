import React from 'react';
import logofull from "./img/LogoCWFull.png";

function CardTrailer() {
    return ( 
<div className='Card-Trailer'>
    <div className='card-title'>
     <h3 className='Title-Card-Trailer'>SÉ PARTE DE <img src={logofull} className='Game-Trailer-Logo'/></h3>
    </div>
    <div className='card-body'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DaKqP_HBp2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>       </iframe>
    </div>
</div>
 );

}

export default CardTrailer;