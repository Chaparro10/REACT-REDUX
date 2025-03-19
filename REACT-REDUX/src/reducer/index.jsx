import { combineReducers } from "redux";
import { reducerPeople } from "./reducerPeople";

//4-Tenemos nuestro reducer

const Rootreducer = combineReducers({
  people: reducerPeople,
});
//con people accedemos al estado

export default Rootreducer;
