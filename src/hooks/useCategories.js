import {useState, useEffect} from "react";
import {Categories} from "../api"

const categoriesCtrl = new Categories();
export function useCategories(){
    const [categories, setCategories]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(false)

    useEffect(() =>{( async () => {
        await getCategories();
    })()},[])
    
    const getCategories = async () => {
        try {
            setLoading(true);
            const response = await categoriesCtrl.obtain();
            setCategories(response)
        } catch (error) {
            setError(error);
        } finally{
            setLoading(false)
        }
    }
    return {
        categories,
        loading,
        error,
        getCategories,
    };
}