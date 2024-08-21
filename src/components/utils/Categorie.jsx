import React, { useState } from "react";

export default function Categorie({ meals }) {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const handleCheckboxChange = (meal) => {
    if (selectedMeals.includes(meal)) {
      setSelectedMeals(selectedMeals.filter((m) => m !== meal));
      setQuantities((prevQuantities) => ({ ...prevQuantities, [meal.name]: undefined })); // Reset quantity when unchecking
    } else {
      setSelectedMeals([...selectedMeals, meal]);
      setQuantities((prevQuantities) => ({ ...prevQuantities, [meal.name]: 1 })); // Default quantity to 1 when checking
    }
  };

  const handleQuantityChange = (meal, quantity) => {
    setQuantities({ ...quantities, [meal.name]: quantity });
  };

  const calculateSubtotal = (meal) => {
    const quantity = quantities[meal.name] || 1;
    return meal.price * quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    for (const meal of selectedMeals) {
      total += calculateSubtotal(meal);
    }
    return total;
  };

  const handleAddToCart = () => {
    const newCartItems = selectedMeals.map((meal) => ({
      name: meal.name,
      quantity: quantities[meal.name] || 1,
      price: meal.price,
      subtotal: calculateSubtotal(meal),
    }));
    setCartItems(newCartItems);
  };

  return (
    <section className="mains">
      {meals.map((meal, index) => (
        <article className="menu-item" key={index}>
          <label htmlFor={`meal-${index}`}>
            <input
              type="checkbox"
              id={`meal-${index}`}
              checked={selectedMeals.includes(meal)}
              onChange={() => handleCheckboxChange(meal)}
              style={{ marginRight: '10px' }}
            />
            <h3 className="mains-name">{meal.name}</h3>
          </label>
          <strong className="mains-price">${meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}

      {/* Mostrar elementos seleccionados */}
      <div className="selected-meals">
        <h2>Elementos Seleccionados:</h2>
        <ul>
          {selectedMeals.map((meal, index) => (
            <li key={index}>
              {meal.name}
              <select
                value={quantities[meal.name] || 1}
                onChange={(e) => handleQuantityChange(meal, parseInt(e.target.value, 10))}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span className="subtotal">Subtotal: ${calculateSubtotal(meal).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="total">
          <span>Total: ${calculateTotal().toFixed(2)}</span>
          <button className="add-to-cart" onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
      </div>

      {/* Mostrar el listado de items en el carrito */}
      <div className="cart-items">
        <h2>Carrito:</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} - Subtotal: ${item.subtotal.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
