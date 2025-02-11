import { useState } from "react";
import classes from "./Login.module.scss";
import { getUserByCode } from "../../../utils/userFetcher";

const Login = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const userData = await getUserByCode(code);

      if (userData.error) {
        setError("Código inválido o usuario no encontrado");
      } else {
        console.log("Usuario autenticado:", userData);
        // Aquí podrías guardar el usuario en el estado global, contexto o redirigir
      }
    } catch (error) {
      setError("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
          />
          <button type="submit" className={classes.button} disabled={loading}>
            {loading ? "Verificando..." : "Ingresar"}
          </button>
        </div>
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </section>
  );
};

export default Login;
