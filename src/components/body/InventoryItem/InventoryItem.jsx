import classes from "./InventoryItem.module.scss";

const InventoryItem = ({ name, code, stock, alert_stock }) => {
  return (
    <div className={classes.inventory}>
      <p>
        <span>Nombre: </span>
        {name}
      </p>
      <p>
        <span>Código: </span>
        {code}
      </p>
      <p>
        <span>Stock actual: </span>
        {stock}
      </p>
      <p>
        <span>Alerta: </span>
        {alert_stock}
      </p>
    </div>
  );
};

export default InventoryItem;
