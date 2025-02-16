import classes from "./InventoryList.module.scss";
import { getInventory } from "../../../utils/productManager";
import InventoryItem from "../InventoryItem/InventoryItem";
import { useEffect, useState } from "react";

const InventoryList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const inventoryData = await getInventory();
      setProducts(inventoryData);
    };

    fetchInventory();
  }, []);

  return (
    <section className="container">
      {products.map((product) => {
        return <InventoryItem key={product.id} {...product} />;
      })}
    </section>
  );
};

export default InventoryList;
