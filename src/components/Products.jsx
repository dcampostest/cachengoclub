import React, {useState, useEffect} from "react";
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

import {Categories} from "../api"
const categoriesCtrl = new Categories();

function Products(){
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        (async () =>{
          const categories = await categoriesCtrl.obtain();
          setCategories(categories)
        })()
      }, [])
    return(
        <div id='products'>
            <h1>Carta</h1>
            <p></p>
            <div className='a-container'>
                {categories && categories.map((category) => <Productbox image={generic} title={category.name}/>)}
            </div>
        </div>
    )
}
export default Products