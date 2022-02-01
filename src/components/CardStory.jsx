import React from 'react';
import logofull from "../LogoCWFull.png";

function CardStory() {
    return ( 
<div className='Card-Story'>
    <div className='card-title'>
     <img src={logofull} className='Game-Trailer-Logo'alt='logofull'/>
    </div>
    <p  className='pStory'>
        Desde hace milenios los tres <span>Reinos de Crypto War</span> estuvieron enfrentados para conquistar su imperio.<br/>
        Hasta que un día fueron amenazados por increíbles criaturas, sedientas de sangre, dominadas por sus <span>Jefes</span>!<br/>
        Los Reinos se aliaron para unir fuerzas , pero de nada les sirvió... 
        Perdieron muchos ejércitos y la gran mayoría de sus tierras.<br/>
        Finalmente se refugiaron en sus respectivas aldeas en las que quedaron prácticamente descubiertos con muchísimo miedo pero jamás perdieron su fe.<br/><br/>
        Años después los <span>Jefes</span> descubrieron donde se encontraba los supervivientes humanos y mandaron a sus criaturas a eliminarlos, pero al llegar a las aldeas se encontraron con un nuevo enemigo, los <span>Medio-Humanos</span>.<br/>
        Los Medio-humanos eran legendarios maestros del combate y los componían <span>4 Razas</span>:<br/> 
        <span>Los Guerreros y Guerreras</span>, hombres y mujeres con una fuerza sobre natural.<br/> 
        <span>Los Suras</span> que vendieron sus almas al Demonio a cambio de ser lideres 
        de la magia negra.<br/>
        <span>Los Ninjas</span> con su rapidez y habilidad para eliminar enemigos.<br/>
        <span>Los Chamanes y Chamanas</span> hechiceros de luz.<br/><br/>

        <span>Las 4 Razas se aliaron con los Reinos para luchar contra las criaturas y matar a sus Jefes.</span>           
    </p>

</div>
 );

}

export default CardStory;