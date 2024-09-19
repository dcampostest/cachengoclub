import React from "react";
import Productbox from "./Productbox";
import generic from '../images/Cachengo_SinFondo_7.png'
import autoria from '../images/autoria.png'
import papas from '../images/papas.png'
import pizzas from '../images/pizza.jpeg'
import burguer from '../images/burguer.jpeg'
import cocktails from '../images/cocktails.jpeg'
import birras from '../images/birras.png'
import vinos from '../images/vinos.png'
import mocktails from '../images/mocktails.png'
import combos from '../images/combos.png'

function Products(){
    return(
        <div id='products'>
            <h3>BIENVENIDA PRIMAVERA</h3>
            <p></p>
            <div className='a-container'>
                <Productbox image={papas} title="Para Picotear"/>
                <Productbox image={pizzas} title="Pizzas"/>
                <Productbox image={burguer} title="Burguers"/>
                <Productbox image={autoria} title="Autoría"/>
                <Productbox image={cocktails} title="Cocktails"/>
                <Productbox image={birras} title="Pintas"/>
                <Productbox image={generic} title="Individuales"/>
                <Productbox image={mocktails} title="Mocktails"/>
                <Productbox image={generic} title="Gintoneria"/>
                <Productbox image={birras} title="Birritas Industriales"/>
                <Productbox image={combos} title="Combos"/>
                <Productbox image={generic} title="Medidas"/>
                <Productbox image={vinos} title="Vinos"/>
            </div>
        </div>
    )
}
export default Products