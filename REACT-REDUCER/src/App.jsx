import { useState,useContext } from 'react'
import './App.css'
import CompConsumeEstadoReducer from './CompConsumeEstadoReducer';
import { PeopleContext } from './Context/PeopleContext';

function App() {
  const [people, setPeople] = useState(null)
  const [mostrar,setMostrar]=useState(false);

  const { state, dispatch } = useContext(PeopleContext);

  const handleAgregarPeople=()=>{
    if (people.trim() === "") return; // Evitar agregar vacíos
    dispatch({ type: "ADD_PEOPLE", payload: { id: Date.now(), name: people } });
    setPeople("");
  }
  const handleEliminarPeople=(id)=>{
    dispatch({ type: "DELETE_PEOPLE", payload: id });
  }

  const handleNombre=(e)=>{
      setPeople(e.target.value)
  }

  const handleComponente2=()=>{
      setMostrar(!mostrar);
  }

  return (
    <>
      <div className="card">
        <button onClick={handleAgregarPeople}>
          count
        </button>
        <input placeholder='agregar persona' onChange={handleNombre} />

        {
          state.user.map((people)=>{
            return(
              <li key={people.id} onClick={()=>handleEliminarPeople(people.id)}>
                {people.name}
              </li>
            )
          })
          // state.user.map((person) => (
          //   <li key={person.id}>
          //     {person.name}
          //   </li>
          // ))
        }
        <button onClick={handleComponente2}>
          Ir a componente 2
        </button>

        {
          mostrar ? <CompConsumeEstadoReducer/>: null
        }
  
      </div>
    
    </>
  )
}

export default App
