import React from "react";
import Productbox from "./Productbox";
import generic from '../images/Cachengo_SinFondo_7.png'
import {useCategories} from "../hooks"

function Products(){
    const {categories, loading, error, getCategories} = useCategories();
    return(
        <div id='products'>
            <h1>Carta</h1>
            <p></p>
            <div className='a-container'>
                {loading ? (
                    <p>Loading...</p>
                ):(
                    categories && categories.map((category) => <Productbox image={generic} title={category.name}/>)
                )}

                <span style={{color: "#f00"}}>{error}</span>
            </div>
        </div>
    )
}
export default Products