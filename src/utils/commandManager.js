export const commandManager = async (cmd) => {
  console.log("Comando recibido:", cmd);
  if (!cmd) return;

  try {
    let response;

    switch (cmd) {
      case "CMD00001":
        response = await commandTest();
        break;
      default:
        console.error("Comando no reconocido");
        return;
    }

    console.log("Respuesta:", response);
  } catch (error) {
    console.error("Error en la petición:", error);
  }
};

const commandTest = async () => {
  console.log("Esto es una prueba");
  return { message: "Prueba ejecutada correctamente" }; // Devuelve un objeto en lugar de undefined
};
