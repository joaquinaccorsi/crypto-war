import React from 'react';
import logofull from "../LogoCWFull.png";

function CardTrailer() {
    return ( 
<div className='Card-Trailer'>
    <div className='card-title'>
     <h3>Se parte de <img src={logofull} className='Game-Trailer-Logo'/></h3>
    </div>
    <div className='card-body'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DaKqP_HBp2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>       </iframe>
    </div>
</div>
 );

}

export default CardTrailer;