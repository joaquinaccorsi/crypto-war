import React from 'react';
import logofull from "./img/LogoCWFull.png";

function CardStory() {
    return ( 
<div className='Card-Story'>
    <div className='card-title'>
     <h3>Se parte de <img src={logofull} className='Game-Trailer-Logo'/></h3>
    </div>
    <p className='pStory'>
        Desde hace milenios los tres Reinos de CryptoWar estuvieron enfrentados para conquistar su imperio.
        Hasta que un día fueron amenazados por increíbles criaturas, criaturas sedienta de hambre, dominadas por sus Jefes!
        Los reinos se aliaron para unir fuerzas , pero de nada les sirvió... 
        Perdieron muchos ejércitos y la gran mayoría de sus tierras.
        Finalmente se refugiaron en sus respectivas aldeas en las que quedaron prácticamente descubiertos con muchísimo miedo pero jamás perdieron su fe.
        Años después los jefes descubrieron donde se encontraba los supervivientes humanos y mandaron a sus criaturas a eliminarlos, pero al llegar a las aldeas se encontraron con un nuevo enemigo, los Medio-Humanos.
        Los Medio-humanos eran Legendario de la lucha y los componían 4 razas: Los Guerreros y Guerreras, hombres y mujeres con una fuerza sobre natural, los y las Suras que vendieron sus almas al Demonio a cambio de ser lideres 
        de la magia negra, los y las Ninjas con su rapidez y su habilidad para matar ,los Chamanes y Chamanas dioses de la magia de luz.
        Las 4 razas se aliaron con los 3 reinos para luchar contra las criaturas y matar a sus Jefes!! Dándole a cambio monedas
        Crypto War           
    </p>

</div>
 );

}

export default CardStory;