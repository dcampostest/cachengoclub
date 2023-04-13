import React, {useState, useEffect} from "react";
import {Products} from "../../api"

export default function Categorie({categoryName}) {
  const productsCtrl = new Products();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    (async () =>{
      const products = await productsCtrl.obtainProducts(categoryName);
      setProducts(products)
    })()
  }, [])
  return (
    <section className="mains">
      {products && products.map((product, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-name">{product.name}</h3>
          <strong className="mains-price">${product.price}</strong>
          <p className="mains-description">{product.description}</p>
        </article>
      ))}
    </section>
  );
}
