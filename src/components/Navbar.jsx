import React from 'react';
import BotonRegistro from "../BotonRegistro.png";
import HOMEBOTON from "../FlechaArriba1.png";
import logofull from "../LogoCWFull.png";

<navbar className="NavBar">
<img src={logofull} className="NavBar-logo" alt="logofull" />

<a href="Inicio" ><img src={HOMEBOTON} className="BotonHome" alt="botonhome"/></a>

<nav className='menu'>
 <a href='#' className='InicioSesion'> iniciá sesión</a>
 <a href='#'><img src={BotonRegistro} className='BotonRegistro' alt="botonregistro"/></a>         
</nav>

</navbar>


function Navbar() {
    return ( <navbar className="NavBar">
    <img src={logofull} className="NavBar-logo" alt="logofull" />
    
    <a href="Inicio" ><img src={HOMEBOTON} className="BotonHome" alt="botonhome"/></a>
    
    <nav className='menu'>
     <a href='#' className='InicioSesion'> iniciá sesión</a>
     <a href='#'><img src={BotonRegistro} className='BotonRegistro' alt="botonregistro"/></a>         
    </nav>
    
    </navbar>


   )   
  }
  
  
  export default Navbar;