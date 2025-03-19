import { configureStore } from "@reduxjs/toolkit";
import { reducerPeople } from "../reducer/reducerPeople";
import Rootreducer from "../reducer";

export const store = configureStore({
  reducer: {
    people: Rootreducer, //registrar el reducer en el store
  },
});
