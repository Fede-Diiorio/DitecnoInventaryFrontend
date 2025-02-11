import classes from "./Navegation.module.scss";
import Button from "../../general/Button/Button";

const Navegation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <Button>Inventario</Button>
        </li>
        <li>
          <Button>Bajo stock</Button>
        </li>
        <li>
          <Button>Listas de precios</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navegation;
