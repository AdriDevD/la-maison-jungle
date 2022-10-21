import { plantList } from "../Datas/PlantList";
import PlantItem from "./PlantItem";
import "../Styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        {
          name,
          price,
          amount: currentPlantAdded.amount + 1,
        },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
            />
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
