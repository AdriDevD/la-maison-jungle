import "../Styles/Cart.css";
import { useState } from "react";

function Cart({ cart, updateCart }) {
  /* Bouton + */
  function addCurrentPlant(name, price) {
    const currentPlant = cart.find((plant) => plant.name === name);
    const cartBeforeCurrentPlant = cart.filter(
      (plant) => plant.name < currentPlant.name
    );
    const cartAfterCurrentPlant = cart.filter(
      (plant) => plant.name > currentPlant.name
    );
    updateCart([
      ...cartBeforeCurrentPlant,
      {
        name,
        price,
        amount: currentPlant.amount + 1,
      },
      ...cartAfterCurrentPlant,
    ]);
  }

  /* Bouton - */
  function delCurrentPlant(name, price) {
    const currentPlant = cart.find((plant) => plant.name === name);
    const cartBeforeCurrentPlant = cart.filter((plant) => plant < currentPlant);
    const cartAfterCurrentPlant = cart.filter((plant) => plant > currentPlant);
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    );
    if (currentPlant.amount <= 0) {
      updateCart([...cartFilteredCurrentPlant]);
    } else {
      updateCart([
        ...cartBeforeCurrentPlant,
        {
          name,
          price,
          amount: currentPlant.amount - 1,
        },
        ...cartAfterCurrentPlant,
      ]);
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div className="lmj-cart-plant" key={`${name}-${index}`}>
          <div className="lmj-cart-plantnameprice">
            {name} {price}€
          </div>
          <div className="lmj-cart-amount">
            <button onClick={() => addCurrentPlant(name, price)}>+</button>{" "}
            {amount}
            <button onClick={() => delCurrentPlant(name, price)}>-</button>
          </div>
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
  );
}
export default Cart;
