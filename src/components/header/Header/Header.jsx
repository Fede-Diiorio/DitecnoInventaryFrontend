import classes from "./Header.module.scss";
import Navegation from "../Navegation/Navegation";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.container}`}>
        <img
          className={classes.logo}
          src="../../../../public/ditecnoLogoCompleto.png"
          alt="Logo de DiTecno"
        />

        <Navegation />
      </div>
    </header>
  );
};

export default Header;
