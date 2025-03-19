



export const initialState = { user: [] };

export const reducerPeople = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return { user: [...state.user, action.payload] };
    case "DELETE_PEOPLE":
      return { user: state.user.filter((person) => person.id !== action.payload) };
    default:
      return state;
  }
};





