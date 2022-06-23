import React from "react";

function Contacto(){

    return(
        <div id='contact'>
            <h1>Reserva tu Mesa</h1>
            <form>
                <input type="text" placeholder='Nombre Completo' />
                <input type="email" placeholder='Ingresa un email' />
                <textarea placeholder='Escribe aquí....'></textarea>
                <input type='submit' value='Reserva'></input>
            </form>
        </div>
    )
}

export default Contacto;