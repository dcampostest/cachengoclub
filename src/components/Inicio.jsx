import React, {useState} from "react";

function Inicio(){

    return(
        <div id='main'>
            <div className='header-heading'>
                <h3>Bienvenidos al club</h3>
                <h1><span>CACHENGO</span> FOR<br/>EVER</h1>
                <p className='details'>Somos una empresa que llego para quedarse. Uno de nuestros principales objetivos es certificar como empresa B, apoyandonos en los 3 pilares fundamentales, en el impacto socio ambiental. Manejando un nivel muy alto de estandarización y calidad en todos nuestros producto.</p>
                <div className='header-btns'>
                    <a href='/about' className='header-btn'>Mas info</a>
                </div>
            </div>
        </div>
    )
}

export default Inicio;