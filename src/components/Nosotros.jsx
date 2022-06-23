import React from "react";
import nosotrosimg from '../images/about.png'

function Nosotros(){
    return(
        <div id='about'>
            <div className='about-text'>
                <h1>Sobre nosotros...</h1>
                <p>Descripcion de proyectos socio culturales mas los proyectos de medio ambiente</p>
                <button>Leer más</button>
            </div>
            <div className='about-image'>
                <img src={nosotrosimg} alt=''/>
            </div>
        </div>
    )
}
export default Nosotros