import React from "react";
import nosotrosimg from '../images/about.png'

function Nosotros(){
    return(
        <div id='about'>
            <div className='about-text'>
                <h1>Sobre nosotros...</h1>
                <p>Somos una empresa que llego para quedarse. Uno de nuestros principales objetivos es certificar como empresa B, Apoyándonos en los 3 pilares fundamentales: el impacto socio ambiental, nivel alto de estandarización y la calidad de nuestros productos.</p>
                <button>Leer más</button>
            </div>
            <div className='about-image'>
                <img src={nosotrosimg} alt=''/>
            </div>
        </div>
    )
}
export default Nosotros