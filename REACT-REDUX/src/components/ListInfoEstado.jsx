import React from "react";
import { useSelector } from "react-redux";

const ListInfoEstado = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      <p style={{ border: "solid 1px blue" }} />
      {!state.people.user.length ? (
        <p>No hay usuarios en el Estado</p>
      ) : (
        state.people.user.map((item) => {
          return (
            <li key={item.id}>
              <p>
                <strong>ID:</strong> {item.id}
              </p>
              <p>Nombre: {item.name}</p>
            </li>
          );
        })
      )}
    </div>
  );
};

export default ListInfoEstado;
