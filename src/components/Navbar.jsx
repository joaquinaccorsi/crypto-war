import React from 'react';
import BotonRegistro from "../BotonRegistro.png";
import HOMEBOTON from "../FlechaArriba1.png";
import logofull from "../LogoCWFull.png";




function Navbar() {
    return ( <navbar className="NavBar">
    <img src={logofull} className="NavBar-logo" alt="logofull" />
    
    <a href="Inicio" ><img src={HOMEBOTON} className="BotonHome" alt="botonhome"/></a>
    
    <nav className='menu'>
     <a href='https://drive.google.com/drive/folders/1YjydiJQq8fvbN4N0a-wfUDJ7gqPSaSuJ?usp=sharing' className='InicioSesion not-active' target="_blank" > descargar Crypto War Client</a>
     <a href='#' className='not-active'><img src={BotonRegistro} className='BotonRegistro' alt="botonregistro"/></a>         
    </nav>
    
    </navbar>


   )   
  }
  
  
  export default Navbar;