import React from "react";
import {useProducts} from "../../hooks"

export default function Categorie({categoryName}) {
  const {products, loading, error, getProducts} = useProducts(categoryName);

  return (
    <section className="mains">
      {loading ? (
          <p>Loading...</p>
      ):(
        products && products.map((product, index) => (
          <article className="menu-item" key={index}>
            <h3 className="mains-name">{product.name}</h3>
            <strong className="mains-price">${product.price}</strong>
            <p className="mains-description">{product.description}</p>
          </article>
        ))
      )}
      <span style={{color: "#f00"}}>{error}</span>
    </section>
  );
}
