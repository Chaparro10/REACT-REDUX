import { AGREGAR_USER, DELETE_USER } from "../types";

export const initialState = { user: [] };

export const reducerPeople = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_USER:
      return { user: [...state.user, action.payload] };
    case DELETE_USER:
      return {
        user: state.user.filter((person) => person.id !== action.payload),
      };
    default:
      return state;
  }
};
