import React from "react";
import Wheel from "./utils/Wheel";
function Inicio(){
    return(
        <div id='main'>
            <div className='header-heading'>
                <h4>Bienvenidos #THECLUB</h4>
                <h2><span>CACHENGO</span> FOR<br/>EVER</h2>
                <p className='details'>Viernes, sábados y domingos a partir de las 20 hs.</p>

            </div>
            <div className='spingame'>
                <Wheel />
            </div>
        </div>
    )
}

export default Inicio;