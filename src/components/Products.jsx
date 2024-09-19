import React from "react";
import Productbox from "./Productbox";
import generic from '../images/Cachengo_SinFondo_7.png'
import autoria from '../images/autoria.png'
import papas from '../images/papas.png'
import pizzas from '../images/pizza.jpeg'
import burguer from '../images/burguer.jpg'
import cocktails from '../images/cocktails.png'
import birras from '../images/birras.png'
import vinos from '../images/vinos.png'
import mocktails from '../images/mocktails.png'
import combos from '../images/combos.png'
import pintas from '../images/pintas.jpg'
import individuales from '../images/individuales.jpeg'
import medidas from '../images/medidas.jpg'
import gintonic from '../images/gintonic.jpeg'

function Products(){
    return(
        <div id='products'>
            <div className='a-container'>
                <Productbox image={papas} title="Para Picotear"/>
                <Productbox image={pizzas} title="Pizzas"/>
                <Productbox image={burguer} title="Burguers"/>
                <Productbox image={autoria} title="Autoría"/>
                <Productbox image={cocktails} title="Cocktails"/>
                <Productbox image={pintas} title="Pintas"/>
                <Productbox image={individuales} title="Individuales"/>
                <Productbox image={mocktails} title="Mocktails"/>
                <Productbox image={gintonic} title="Gintoneria"/>
                <Productbox image={birras} title="Birritas Industriales"/>
                <Productbox image={combos} title="Combos"/>
                <Productbox image={medidas} title="Medidas"/>
                <Productbox image={vinos} title="Vinos"/>
            </div>
        </div>
    )
}
export default Products