import { useContext, useState } from "react";
import "./App.css";
import { ContadorContext } from "./context/contadorContext";

function App() {
  const { contador, setContador } = useContext(ContadorContext);

  const handleBoton = (action) => {
    if (action == "sumar") {
      setContador(contador + 1);
    } else {
      setContador(contador - 1);
    }

  };
  return (
    <>
      <div>
        <button onClick={() => handleBoton("sumar")}>Agregar</button>
        <button onClick={() => handleBoton("restar")}>Restar</button>
        <h1>Count: {contador}</h1>
        <p>Count: {contador}</p>
      </div>
    </>
  );
}

export default App;
