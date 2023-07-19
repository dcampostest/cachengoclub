import {useState, useEffect} from "react";
import {Products} from "../api"

const productsCtrl = new Products();
export function useProducts(categoryName){
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(false)

    useEffect(() =>{( async () => {
        await getProducts();
    })()},[])
    
    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await productsCtrl.obtainProducts();
            var listProdcutsByCategory = []
            for(let i = 0; i < response.length; i++) {
                if (response[i]['references:ID'].name == categoryName) {
                    console.log("entro en el if")
                    listProdcutsByCategory.push(response[i])
                }     
            }
            setProducts(listProdcutsByCategory)

        } catch (error) {
            setError(error);
        } finally{
            setLoading(false)
        }
    }
    return {
        products,
        loading,
        error,
        getProducts,
    };
}