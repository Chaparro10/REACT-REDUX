import { AGREGAR_USER } from "../types";

export const AGREGAR_PEOPLE = (data) => ({
  type: AGREGAR_USER,
  payload: { id: Date.now(), name: data },
});
