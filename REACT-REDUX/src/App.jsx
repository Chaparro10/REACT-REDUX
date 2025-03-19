import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AGREGAR_PEOPLE } from "./actions";
import ListInfoEstado from "./components/ListInfoEstado";

function App() {
  const [people, setPeople] = useState(null);
  const [mostrar, setMostrar] = useState(false);
  const state = useSelector((state) => state);
  const dispath = useDispatch();

  const handleAddPeople = () => {
    if (people.trim() == "") return;
    dispath(AGREGAR_PEOPLE(people));
    setPeople("");
  };

  const handleChangePeople = (e) => {
    setPeople(e.target.value);
  };
  const handleMostrarInfo = () => {
    setMostrar(!mostrar);
  };
  return (
    <>
      <h1>REACT-REDUX</h1>
      <div className="card">
        
        <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
        <input onChange={handleChangePeople} />
        <button onClick={handleAddPeople}>Agregar People</button>
        <button onClick={handleMostrarInfo}>Mostrar Lista</button>
        </div>
       

        {state.people.user.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}

      {mostrar ? <ListInfoEstado /> : null}
      </div>

     
    </>
  );
}

export default App;
