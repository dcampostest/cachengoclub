import React from "react";
import Productbox from "./Productbox";
import generic from '../images/Cachengo_SinFondo_7.png'
function Products(){
    return(
        <div id='products'>
            <h1>Carta</h1>
            <p></p>
            <div className='a-container'>
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