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
function Products(){
    return(
        <div id='products'>
            <h1>Carta</h1>
            <p></p>
            <div className='a-container'>
                <Productbox image={promos} title="Promos"/>
                <Productbox image={burguer} title="Burguers"/>
                <Productbox image={pizza} title="Pizzas"/>
                <Productbox image={papas} title="Entradas"/>
                <Productbox image={daiquiri} title="Bebidas Fresh"/>
                <Productbox image={pepsi} title="Bebidas Sin Alcohol"/>
                <Productbox image={champagne} title="Champagnes"/>
                <Productbox image={birras} title="Birras"/>
                <Productbox image={vinos} title="Vinos"/>
                <Productbox image={franui} title="Franui"/>
                <Productbox image={branca} title="Cachengo Combos"/>
                <Productbox image={cocktails} title="Cocktails"/>
                <Productbox image={gintonic} title="Gintoneria"/>
                <Productbox image={sour} title="Cachengo Sours"/>

            </div>
        </div>
    )
}
export default Products