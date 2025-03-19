

import {createContext,useReducer} from 'react';
import { initialState, reducerPeople } from '../Reducer/reducerTodo';

export const PeopleContext=createContext();


export const PeopleProvider=({children})=>{
    const [state, dispatch] = useReducer(reducerPeople, initialState);
        return(
            <PeopleContext.Provider value={{state,dispatch}}>
                {children}
            </PeopleContext.Provider>
        )
}