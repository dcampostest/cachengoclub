import React from "react";
import Productbox from "./Productbox";
import burguer from '../images/burguer.png'
import papas from '../images/papas.png'
import birras from '../images/birra.png'
import gintonic from '../images/gintonic.png'
import cocktails from '../images/cocktail.png'
import sour from '../images/sour.png'
import pizza from '../images/pizza.png'
import vinos from '../images/vinos.png'
import franui from '../images/franui.png'
import champagne from '../images/champagne.png'
import branca from '../images/branca.png'
import daiquiri from '../images/daiquiri.png'
import pepsi from '../images/pepsi.png'
import promos from '../images/promos.png'
import generic from '../images/Cachengo_SinFondo_7.png'
function Products(){
    return(
        <div id='products'>
            <h1>Carta</h1>
            <p></p>
            <div className='a-container'>
                <Productbox image={generic} title="Promos"/>
                <Productbox image={generic} title="Novedades"/>
                <Productbox image={generic} title="Para Picotear"/>
                <Productbox image={generic} title="Pizzas"/>
                <Productbox image={generic} title="Burguers"/>
                <Productbox image={generic} title="Autoría"/>
                <Productbox image={generic} title="Cocktails"/>
                <Productbox image={generic} title="Pintas"/>
                <Productbox image={generic} title="Individuales"/>
                <Productbox image={generic} title="Mocktails"/>
                <Productbox image={generic} title="Gintoneria"/>
                <Productbox image={generic} title="Birritas Industriales"/>
                <Productbox image={generic} title="Combos"/>
                <Productbox image={generic} title="Medidas"/>
                <Productbox image={generic} title="Vinos"/>
            </div>
        </div>
    )
}
export default Products