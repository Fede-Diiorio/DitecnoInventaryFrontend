import { useState, useContext } from "react";
import classes from "./Login.module.scss";
import { getUserByCode } from "../../../utils/userFetcher";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
  const [code, setCode] = useState("");
  const { login } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await getUserByCode(code);
    login(token);
  };

  return (
    <section className={classes.section}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <legend>Ingrese su código de usuario para continuar</legend>
        <div className={classes.field}>
          <input
            type="password"
            placeholder="Código de Usuario"
            value={code}
            onChange={handleInputChange}
            className={classes.input}
          />
          <button type="submit" className={classes.button}>
            Ingresar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
