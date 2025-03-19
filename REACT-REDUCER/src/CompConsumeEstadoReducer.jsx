
import { useState,useContext } from 'react'
import { PeopleContext } from './Context/PeopleContext';
const CompConsumeEstadoReducer = () => {
    const { state, dispatch } = useContext(PeopleContext);

    console.log('state reducer', state)
  return (
    <div>
        <h1>Estado del reducer</h1>
        {
            state.user.map((item)=>{
                return(
                    <li key={item.id}>
                            {item.name}
                    </li>
                )
            })
        }
    </div>
  )
}

export default CompConsumeEstadoReducer