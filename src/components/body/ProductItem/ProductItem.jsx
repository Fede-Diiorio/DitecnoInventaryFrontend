import classes from "./ProductItem.module.scss";

const ProductItem = ({ name, code, quantity }) => {
  return (
    <div className={classes.box}>
      <p>
        <span>Nombre: </span>
        {name}
      </p>
      <p>
        <span>Código: </span> {code}
      </p>
      <p>
        <span>Cantidad: </span> {quantity}
      </p>
    </div>
  );
};

export default ProductItem;
