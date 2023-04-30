import React from "react";

export default function Categorie({ meals }) {
  return (
    <section className="mains">
      {meals.map((meal, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-name">{meal.name}</h3>
          <strong className="mains-price">${meal.price}</strong>
          <table>
            <tr><Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} /></tr>
            <tr><p className="mains-description">{meal.description}</p></tr>
          </table>    
        </article>
      ))}
    </section>
  );
}
