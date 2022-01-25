import React from 'react';
import logo from '../CWLOGOSHORT.png';

function CardDonate() {
  return ( 
    <div className='card'>
        <div className='card-body'>
          <h3>DONÁ USDT Y OBTENÉ ÉSTAS RECOMPENSAS POR APOYARNOS :D</h3>
            <p>
                -Acceso a la <strong>WHITELIST</strong> de la preventa del token <img src={logo} className='Logo-Text'/> 
               <br/>
               -Atuendo con un <strong> BONUS ESPECIAL </strong> ¡Podrás comercializar éste articulo!
               <br/><br/><br/>
               

            </p>
            <strong>2000 CUPOS</strong>                        <strong>30 USDT</strong>
            <br/><br/><br/>
            <button className='Metamask-Button' class="btn-light" >
                APOYANOS DESDE<br/>
                TU METAMASK
            </button>
        </div>
    </div>
 )   
}


export default CardDonate;

