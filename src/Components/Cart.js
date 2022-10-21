import "../Styles/Cart.css";
import { useState } from "react";

function Cart({ cart, updateCart }) {
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
        <div key={`${name}-${index}`}>
          {name} {price}€ x {amount}
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
